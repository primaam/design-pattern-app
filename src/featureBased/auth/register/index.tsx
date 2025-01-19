import React from "react";

const RegisterFeatureBased = () => {
    const [formData, setFormData] = React.useState({
        fullname: "",
        username: "",
        password: "",
        repassword: "",
    });

    const [error, setError] = React.useState("");

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (
            !formData.fullname ||
            !formData.username ||
            !formData.password ||
            !formData.repassword
        ) {
            setError("All fields are required.");
            return;
        }
        if (formData.password !== formData.repassword) {
            setError("Passwords do not match.");
            return;
        }

        setError(""); // Clear any previous errors
        console.log("Form submitted:", formData);
        // You can replace this with actual API logic
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-md m-2 md:max-w-xl md:p-8 md:m-4">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="fullname" className="block text-sm font-medium">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full p-2 border rounded-md mt-1"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter your username"
                            className="w-full p-2 border rounded-md mt-1"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full p-2 border rounded-md mt-1"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="repassword" className="block text-sm font-medium">
                            Re-enter Password
                        </label>
                        <input
                            type="password"
                            id="repassword"
                            name="repassword"
                            value={formData.repassword}
                            onChange={handleChange}
                            placeholder="Re-enter your password"
                            className="w-full p-2 border rounded-md mt-1"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600"
                    >
                        Register
                    </button>
                </form>
                <hr className="my-6" />
                <div className="text-center">
                    <p className="text-sm">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-500 hover:underline">
                            Back to Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterFeatureBased;
