import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginFeatureBased from "./auth/login";

const FeatureBasedWrapper: React.FC = () => {
    return (
        <Routes>
            <Route path="feature-based">
                <Route path="feature-based/auth/login" element={<LoginFeatureBased />} />
                <Route path="feature-based/auth/register" />
                <Route path="feature-based/dashboard" />
            </Route>
        </Routes>
    );
};

export default FeatureBasedWrapper;
