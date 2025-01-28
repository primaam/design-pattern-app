import React from "react";

interface RegulerInputProps {
    value: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    placeholder: string;
    type?: React.HTMLInputTypeAttribute;
}

const RegulerInputForm: React.FC<RegulerInputProps> = ({
    value,
    label,
    name,
    onChange,
    placeholder,
    type = "text",
}) => {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={placeholder}
            />
        </div>
    );
};

export default RegulerInputForm;
