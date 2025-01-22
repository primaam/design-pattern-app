import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginFeatureBased from "../featureBased/auth/login";
import RegisterFeatureBased from "../featureBased/auth/register";
import DashboardFeatureBased from "../featureBased/dashboard";
import Home from "./Home";
import Header from "./Header";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Header />}>
                    <Route path="/" element={<Home />} />

                    <Route path="feature-based">
                        <Route index element={<LoginFeatureBased />} />
                        <Route path="auth/register" element={<RegisterFeatureBased />} />
                        <Route path="dashboard" element={<DashboardFeatureBased />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
