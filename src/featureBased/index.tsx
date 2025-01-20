import React from "react";
import { Routes, Route } from "react-router";
import LoginFeatureBased from "./auth/login";
import RegisterFeatureBased from "./auth/register";
import DashboardFeatureBased from "./dashboard";

const FeatureBasedWrapper: React.FC = () => {
    return (
        <Routes>
            <Route path="feature-based/auth/login" element={<LoginFeatureBased />} />
            <Route path="feature-based/auth/register" element={<RegisterFeatureBased />} />
            <Route path="feature-based/dashboard" element={<DashboardFeatureBased />} />
        </Routes>
    );
};

export default FeatureBasedWrapper;
