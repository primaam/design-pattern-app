import React from "react";
import { InputField, InputPasswordField, InputSavePasswordField } from "../molecules";
import { PrimaryButton } from "../atoms";

type PasswordInputType = "text" | "password";
interface InputFieldProps {
    label: string;
    htmlFor: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    id?: string;
}

interface UsernameProps extends InputFieldProps {
    placeholder: string;
    value: string;
    required: boolean;
    type: React.HTMLInputTypeAttribute;
    className?: string;
}
interface PasswordProps extends InputFieldProps {
    placeholder: string;
    value: string;
    required: boolean;
    type: PasswordInputType;
    className?: string;
    showPassword: boolean;
    onClickShowPassword: () => void;
}
interface SavePasswordProps extends InputFieldProps {
    checked: boolean;
}

interface LoginFormProps {
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    username: UsernameProps;
    password: PasswordProps;
    savePassword: SavePasswordProps;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, username, password, savePassword }) => {
    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <InputField {...username} />
            <InputPasswordField {...password} />
            <InputSavePasswordField {...savePassword} />
            <PrimaryButton type="submit">Login</PrimaryButton>
        </form>
    );
};

export default LoginForm;
