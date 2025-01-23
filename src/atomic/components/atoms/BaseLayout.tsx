import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

const BaseLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">{children}</div>
    );
};

export default BaseLayout;
