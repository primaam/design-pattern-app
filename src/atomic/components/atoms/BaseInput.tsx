import React from "react";
import { InputProps } from "../types/inputTypes";

const BaseInput: React.FC<InputProps> = ({ children, ...props }) => {
    return (
        <input
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...props}
        >
            {children}
        </input>
    );
};

export default BaseInput;
