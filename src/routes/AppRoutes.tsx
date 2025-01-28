import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginFeatureBased from "../featureBased/auth/login";
import RegisterFeatureBased from "../featureBased/auth/register";
import DashboardFeatureBased from "../featureBased/dashboard";
import Home from "./Home";
import Header from "./Header";
import LoginCnP from "../containerPresentational/container/pages/LoginCnP";
import RegisterCnP from "../containerPresentational/container/pages/RegisterCnP";
import DashboardCnP from "../containerPresentational/container/pages/DashboardCnP";
import LoginAtomic from "../atomic/product/pages/LoginAtomic";
import RegisterAtomic from "../atomic/product/pages/RegisterAtomic";
import DashboardAtomic from "../atomic/product/pages/DashboardAtomic";

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

                    {/* Atomic */}
                    <Route path="atomic">
                        <Route index element={<LoginAtomic />} />
                        <Route path="auth/register" element={<RegisterAtomic />} />
                        <Route path="dashboard" element={<DashboardAtomic />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
