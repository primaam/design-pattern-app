import React from "react";
import { BaseInput, BaseLabel } from "../atoms";

type PasswordInputType = "text" | "password";

interface InputPasswordFieldProps {
    label: string;
    htmlFor: string;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required: boolean;
    id?: string;
    placeholder: string;
    name: string;
    showPassword: boolean;
    onClickShowPassword: () => void;
    type: PasswordInputType;
}

const InputPasswordField: React.FC<InputPasswordFieldProps> = ({
    label,
    htmlFor,
    value,
    onChange,
    required = false,
    id,
    placeholder = "",
    name,
    showPassword = false,
    onClickShowPassword,
    type,
}) => {
    return (
        <div className="mb-4">
            <BaseLabel label={label} htmlFor={htmlFor} />
            <div className="relative">
                <BaseInput
                    name={name}
                    type={type}
                    id={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                />
                <button
                    type="button"
                    className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                    onClick={onClickShowPassword}
                >
                    {showPassword ? "Hide" : "Show"}
                </button>
            </div>
        </div>
    );
};

export default InputPasswordField;
