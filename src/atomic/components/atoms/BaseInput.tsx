import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const BaseInput: React.FC<InputProps> = ({ name, ...props }) => {
    return (
        <input
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            name={name}
            {...props}
        />
    );
};

export default BaseInput;
