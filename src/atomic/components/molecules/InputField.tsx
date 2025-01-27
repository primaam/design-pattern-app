import React from "react";
import { BaseInput, BaseLabel } from "../atoms";
import { InputProps } from "../types/inputTypes";
interface InputFieldProps {
    label: string;
    inputProps: InputProps;
}

const InputField: React.FC<InputFieldProps> = ({ label, inputProps }) => {
    return (
        <div className="mb-4">
            <BaseLabel label={label} />
            <BaseInput {...inputProps} />
        </div>
    );
};

export default InputField;
