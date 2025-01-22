import React from "react";
import { Outlet, Route } from "react-router";
import LoginFeatureBased from "./auth/login";
import RegisterFeatureBased from "./auth/register";
import DashboardFeatureBased from "./dashboard";

interface FeatureBasedProps {
    username: string;
    isAuthenticated: boolean;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const FeatureBasedContext = React.createContext<FeatureBasedProps | null>(null);

const FeatureBasedContent = () => {
    return (
        <>
            <Route index element={<LoginFeatureBased />} />
            <Route path="auth/register" element={<RegisterFeatureBased />} />
            <Route path="dashboard" element={<DashboardFeatureBased />} />
        </>
    );
};

const FeatureBasedWrapper = () => {
    const [username, setUsername] = React.useState<string>("");
    const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
    return (
        <FeatureBasedContext.Provider
            value={{
                username,
                isAuthenticated,
                setUsername,
                setIsAuthenticated,
            }}
        >
            <Outlet />
            {/* <FeatureBasedContent/> */}
            {/* <Route path="feature-based">
                {isAuthenticated ? (
                    <Route path="dashboard" element={<DashboardFeatureBased />} />
                ) : (
                    <>
                        <Route index element={<LoginFeatureBased />} />
                        <Route path="auth/register" element={<RegisterFeatureBased />} />
                    </>
                )}
            </Route> */}
        </FeatureBasedContext.Provider>
    );
};

export default FeatureBasedWrapper;
