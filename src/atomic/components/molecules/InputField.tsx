import React from "react";
import { BaseInput, BaseLabel } from "../atoms";

interface InputFieldProps {
    label: string;
    htmlFor: string;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required: boolean;
    type: React.HTMLInputTypeAttribute;
    id?: string;
    placeholder: string;
    name: string;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    htmlFor,
    value,
    onChange,
    required = false,
    type = "text",
    id,
    placeholder = "",
    name,
}) => {
    return (
        <div>
            <BaseLabel label={label} htmlFor={htmlFor} />
            <BaseInput
                name={name}
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
};

export default InputField;
