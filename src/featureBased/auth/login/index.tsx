import React from "react";

const LoginFeatureBased: React.FC = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [savePassword, setSavePassword] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Login successful!");
    };

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-md m-2 md:max-w-2xl md:p-8 md:m-4">
                    {/* Title */}
                    <h1 className="text-2xl font-bold text-center mb-6">Login Feature-Based</h1>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="savePassword"
                                checked={savePassword}
                                onChange={() => setSavePassword(!savePassword)}
                                className="mr-2"
                            />
                            <label htmlFor="savePassword" className="text-sm text-gray-700">
                                Save Password
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                        >
                            Login
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6">
                        <hr className="border-gray-300" />
                    </div>

                    {/* Register Section */}
                    <div className="text-center">
                        <p className="text-sm text-gray-700">
                            Don’t have an account?{" "}
                            <a href="/register" className="text-blue-500 hover:underline">
                                Register here
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginFeatureBased;
