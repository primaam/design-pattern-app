import React from "react";
import { InputProps } from "../types/inputTypes";
import { BaseInput, BaseLabel } from "../atoms";

interface InputSavePasswordFieldProps {
    label: string;
    inputProps: InputProps;
}

const InputSavePasswordField: React.FC<InputSavePasswordFieldProps> = ({ label, inputProps }) => {
    return (
        <div className="flex items-center">
            <BaseInput {...inputProps} className="mr-2" />
            <BaseLabel label={label} />
        </div>
    );
};

export default InputSavePasswordField;
