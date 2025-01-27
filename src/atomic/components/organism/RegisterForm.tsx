import React from "react";
import { InputProps } from "../types/inputTypes";
import { InputField } from "../molecules";
import { PrimaryButton } from "../atoms";

interface RegisterProps {
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    username: InputProps;
    fullname: InputProps;
    password: InputProps;
    repassword: InputProps;
}

const RegisterForm: React.FC<RegisterProps> = ({
    onSubmit,
    username,
    fullname,
    password,
    repassword,
}) => {
    return (
        <form onSubmit={onSubmit}>
            <InputField label="Full Name" inputProps={fullname} />
            <InputField label="Username" inputProps={username} />
            <InputField label="Password" inputProps={{ type: "password", ...password }} />
            <InputField
                label="Re-enter Password"
                inputProps={{ type: "password", ...repassword }}
            />
            <PrimaryButton type="submit">Register</PrimaryButton>
        </form>
    );
};

export default RegisterForm;
