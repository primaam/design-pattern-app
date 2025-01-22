import React from "react";
import { Route, Routes } from "react-router";
import LoginFeatureBased from "./auth/login";
import RegisterFeatureBased from "./auth/register";
import DashboardFeatureBased from "./dashboard";

const FeatureBasedContext = React.createContext<string>("");

const FeatureBasedWrapper = () => {
    return (
        <FeatureBasedContext.Provider value="sddh">
            <Route path="feature-based">
                <Route index element={<LoginFeatureBased />} />
                <Route path="auth/register" element={<RegisterFeatureBased />} />
                <Route path="dashboard" element={<DashboardFeatureBased />} />
            </Route>
        </FeatureBasedContext.Provider>
    );
};

export default FeatureBasedWrapper;
