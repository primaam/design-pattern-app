import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginFeatureBased from "../featureBased/auth/login";
import RegisterFeatureBased from "../featureBased/auth/register";
import DashboardFeatureBased from "../featureBased/dashboard";
import Home from "./Home";
import Header from "./Header";
import FeatureBasedWrapper from "../featureBased";
import LoginCnP from "../containerPresentational/pages/LoginCnP";
import RegisterCnP from "../containerPresentational/pages/RegisterCnP";
import DashboardCnP from "../containerPresentational/pages/DashboardCnP";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Header />}>
                    <Route path="/" element={<Home />} />

                    {/* <FeatureBasedWrapper /> */}
                    <Route path="feature-based">
                        <Route index element={<LoginFeatureBased />} />
                        <Route path="auth/register" element={<RegisterFeatureBased />} />
                        <Route path="dashboard" element={<DashboardFeatureBased />} />
                    </Route>

                    {/* Container - Presentational */}
                    <Route path="container-presentational">
                        <Route index element={<LoginCnP />} />
                        <Route path="auth/register" element={<RegisterCnP />} />
                        <Route path="dashboard" element={<DashboardCnP />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
