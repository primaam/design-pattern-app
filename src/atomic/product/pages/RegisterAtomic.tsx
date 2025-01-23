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
        setFormData({ ...formData, [name]: value });
    };

    const createInputObj = (
        name: string,
        label: string,
        type: string,
        placeholder: string,
        required: boolean
    ) => ({
        value: formData[name as keyof typeof formData],
        name,
        htmlFor: name,
        label,
        placeholder,
        required,
        type,
        onChange: handleChange,
    });

    const usernameObj = createInputObj(
        "username",
        "Username",
        "text",
        "Enter your username here",
        true
    );
    const fnameObj = createInputObj(
        "fullname",
        "Full Name",
        "text",
        "Enter your full name here",
        true
    );
    const passwordObj = createInputObj(
        "password",
        "Password",
        "password",
        "Enter your password here",
        true
    );
    const repasswordObj = createInputObj(
        "repassword",
        "Re-enter Password",
        "password",
        "Re-enter your password here",
        false
    );

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
