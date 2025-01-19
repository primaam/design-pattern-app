import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

const ContainerPresentationalWrapper: React.FC = () => {
    return (
        <Routes>
            <Route path="container-presentational">
                <Route path="/auth/register" />
                <Route path="/dashboard" />
            </Route>
        </Routes>
    );
};

export default ContainerPresentationalWrapper;
