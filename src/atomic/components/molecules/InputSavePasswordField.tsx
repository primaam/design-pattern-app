import React from "react";
import { BaseInput, BaseLabel } from "../atoms";

interface InputSavePasswordFieldProps {
    label: string;
    htmlFor: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    name: string;
}

const InputSavePasswordField: React.FC<InputSavePasswordFieldProps> = ({
    label,
    htmlFor,
    checked = false,
    onChange,
    id = "",
    name,
}) => {
    return (
        <div className="flex items-center">
            <BaseInput
                name={name}
                type={"checkbox"}
                id={id}
                checked={checked}
                onChange={onChange}
                className="mr-2"
            />
            <BaseLabel label={label} htmlFor={htmlFor} />
        </div>
    );
};

export default InputSavePasswordField;
