import React from "react";

interface TextProps {
    children: React.ReactNode;
}

const PrimaryText: React.FC<TextProps> = ({ children }) => {
    return <p className="text-sm text-gray-700">{children}</p>;
};

export default PrimaryText;
