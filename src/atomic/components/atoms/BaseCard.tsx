import React from "react";

interface CardProps {
    children: React.ReactNode;
}

const BaseCard: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-md m-2 md:max-w-2xl md:p-8 md:m-4">
            {children}
        </div>
    );
};

export default BaseCard;
