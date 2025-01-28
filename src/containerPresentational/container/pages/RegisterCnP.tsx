import React from "react";
import { useNavigate } from "react-router";
import { CustomLayout, CustomCard, CustomTitle, CustomDivider, FooterAuth } from "../../components";

const RegisterCnP = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        fullname: "",
        username: "",
        password: "",
        repassword: "",
    });

    const [error, setError] = React.useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

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

        setError("");
        navigate("/container-presentational");
    };

    return (
        <CustomLayout>
            <CustomCard>
                <CustomTitle title="Register Container-Presentational" />

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

                <CustomDivider />

                <FooterAuth
                    str="Already have an account? "
                    url="/container-presentational/auth/register"
                    urlStr="Back to Login"
                />
            </CustomCard>
        </CustomLayout>
    );
};

export default RegisterCnP;
