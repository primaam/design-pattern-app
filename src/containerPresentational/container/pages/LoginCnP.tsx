import React from "react";
import { useNavigate } from "react-router";
import { CustomLayout, CustomCard, CustomTitle, CustomDivider, FooterAuth } from "../../components";

const LoginCnP: React.FC = () => {
    const navigate = useNavigate();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [savePassword, setSavePassword] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Login successful!");
        navigate("/container-presentational/dashboard");
    };

    return (
        <CustomLayout>
            <CustomCard>
                <CustomTitle title="Login Container-Presentational" />

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
                <CustomDivider />

                {/* Register Section */}
                <FooterAuth
                    str=" Don’t have an account? "
                    url="/container-presentational/auth/register"
                    urlStr="Register here"
                />
            </CustomCard>
        </CustomLayout>
    );
};

export default LoginCnP;
