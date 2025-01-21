import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import FeatureBasedWrapper from "../featureBased";
import MainNavigation from "./MainNavigation";
import LoginFeatureBased from "../featureBased/auth/login";
import RegisterFeatureBased from "../featureBased/auth/register";
import DashboardFeatureBased from "../featureBased/dashboard";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainNavigation />} />

                <Route path="feature-based">
                    <Route index element={<LoginFeatureBased />} />
                    <Route path="auth/register" element={<RegisterFeatureBased />} />
                    <Route path="dashboard" element={<DashboardFeatureBased />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
