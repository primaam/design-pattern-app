import React from "react";
import { useNavigate } from "react-router";
import {
    BaseCard,
    BaseDivider,
    BaseErrorText,
    BaseLayout,
    BaseTitle,
} from "../../components/atoms";
import { FooterAuthForm } from "../../components/molecules";
import { RegisterForm } from "../../components/organism";

const RegisterAtomic = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        fullname: "",
        username: "",
        password: "",
        repassword: "",
    });

    const [error, setError] = React.useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const usernameObj = {
        value: formData.username,
        name: "username",
        htmlFor: "username",
        label: "Username",
        placeholder: "Enter your username here",
        required: true,
        type: "text",
        onChange: handleChange,
    };

    const fnameObj = {
        value: formData.fullname,
        name: "fullname",
        htmlFor: "fullname",
        label: "Full Name",
        placeholder: "Enter your full name here",
        required: true,
        type: "text",
        onChange: handleChange,
    };

    const passwordObj = {
        value: formData.password,
        name: "password",
        htmlFor: "password",
        label: "Password",
        placeholder: "Enter your password here",
        required: true,
        type: "password",
        onChange: handleChange,
    };

    const repasswordObj = {
        value: formData.repassword,
        name: "repassword",
        htmlFor: "repassword",
        label: "Re-enter Password",
        placeholder: "Re-enter your password here",
        required: true,
        type: "password",
        onChange: handleChange,
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (
            !formData.fullname ||
            !formData.username ||
            !formData.password ||
            !formData.repassword
        ) {
            setError("All fields are required.");
            return;
        }
        if (formData.password !== formData.repassword) {
            setError("Passwords do not match.");
            return;
        }

        setError("");
        navigate("/atomic");
    };

    return (
        <BaseLayout>
            <BaseCard>
                <BaseTitle title="Register Atomic" />
                {error && <BaseErrorText errorMsg={`${error}`} />}
                <RegisterForm
                    onSubmit={handleSubmit}
                    username={usernameObj}
                    fullname={fnameObj}
                    password={passwordObj}
                    repassword={repasswordObj}
                />

                <BaseDivider />
                <FooterAuthForm
                    anchorStr="Back to Login"
                    str="Already have an account? "
                    href="/atomic"
                />
            </BaseCard>
        </BaseLayout>
    );
};

export default RegisterAtomic;
