import React from "react";
import { InputField } from "../molecules";
import { PrimaryButton } from "../atoms";

interface InputFieldProps {
    label: string;
    htmlFor: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    id?: string;
}

interface NameProps extends InputFieldProps {
    placeholder?: string;
    value: string;
    required: boolean;
    type?: React.HTMLInputTypeAttribute;
    className?: string;
}

interface PasswordProps extends InputFieldProps {
    placeholder: string;
    value: string;
    required: boolean;
    type: React.HTMLInputTypeAttribute;
    className?: string;
}

interface RegisterProps {
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    username: NameProps;
    fullname: NameProps;
    password: PasswordProps;
    repassword: PasswordProps;
}

const defaultValue = {
    label: "Full Name",
    htmlFor: "fname",
    required: false,
    placeholder: "Enter your full name here",
    type: "text",
};

const RegisterForm: React.FC<RegisterProps> = ({
    onSubmit,
    username,
    fullname,
    password,
    repassword,
}) => {
    return (
        <form onSubmit={onSubmit}>
            <InputField {...fullname} {...defaultValue} />
            <InputField
                {...username}
                label="Username"
                htmlFor="username"
                required
                placeholder="Enter your username here"
                type="text"
            />
            <InputField {...password} type="password" />
            <InputField {...repassword} type="password" />
            <PrimaryButton type="submit">Register</PrimaryButton>
        </form>
    );
};

export default RegisterForm;
