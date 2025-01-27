import React from "react";
import { InputProps, InputPasswordProps } from "../types/inputTypes";
import { InputField, InputPasswordField, InputSavePasswordField } from "../molecules";
import { PrimaryButton } from "../atoms";

interface LoginFormProps {
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    usernameAttribute: InputProps;
    passwordAttribute: InputProps;
    savePasswordAttribute: InputProps;
    onClickShowPassword: () => void;
    showPassword: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
    onSubmit,
    usernameAttribute,
    passwordAttribute,
    savePasswordAttribute,
    onClickShowPassword,
    showPassword,
}) => {
    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <InputField
                label="Username"
                inputProps={{
                    placeholder: "Enter your username here",
                    type: "text",
                    ...usernameAttribute,
                }}
            />
            <InputPasswordField
                label="Password"
                inputProps={{
                    placeholder: "Enter your password here",
                    type: showPassword ? "text" : "password",
                    ...passwordAttribute,
                }}
                onClickShowPassword={onClickShowPassword}
                showPassword={showPassword}
            />
            <InputSavePasswordField
                label="Save password"
                inputProps={{
                    type: "checkbox",
                    ...savePasswordAttribute,
                }}
            />
            <PrimaryButton type="submit">Login</PrimaryButton>
        </form>
    );
};

export default LoginForm;
