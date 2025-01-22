import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const PrimaryButton: React.FC<ButtonProps> = ({ children, onClick, ...props }) => {
    return (
        <button
            onClick={onClick}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            {...props}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
