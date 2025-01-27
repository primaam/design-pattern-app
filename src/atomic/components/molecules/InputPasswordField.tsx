import React from "react";
import { InputProps } from "../types/inputTypes";
import { BaseInput, BaseLabel } from "../atoms";
interface InputPasswordFieldProps {
    label: string;
    inputProps: InputProps;
    showPassword: boolean;
    onClickShowPassword: () => void;
}

const InputPasswordField: React.FC<InputPasswordFieldProps> = ({
    label,
    showPassword = false,
    onClickShowPassword,
    inputProps,
}) => {
    return (
        <div className="mb-4">
            <BaseLabel label={label} />
            <div className="relative">
                <BaseInput {...inputProps} />
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
