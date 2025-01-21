import React from "react";
import { Route, Routes } from "react-router";
import LoginFeatureBased from "./auth/login";
import RegisterFeatureBased from "./auth/register";
import DashboardFeatureBased from "./dashboard";

const FeatureBasedWrapper: React.FC = () => {
    return (
        <Routes>
            <Route index path="auth/register" element={<LoginFeatureBased />} />
            <Route path="auth/register" element={<RegisterFeatureBased />} />
            <Route path="dashboard" element={<DashboardFeatureBased />} />
        </Routes>
    );
};

export default FeatureBasedWrapper;
