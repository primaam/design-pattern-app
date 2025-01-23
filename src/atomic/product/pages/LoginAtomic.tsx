import React from "react";
import { useNavigate } from "react-router";
import { BaseCard, BaseDivider, BaseLayout, BaseTitle } from "../../components/atoms";
import { FooterAuthForm } from "../../components/molecules";
import { LoginForm } from "../../components/organism";

const LoginAtomic: React.FC = () => {
    const navigate = useNavigate();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [savePassword, setSavePassword] = React.useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        switch (name) {
            case "username":
                setUsername(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const usernameObj = {
        value: username,
        htmlFor: "username",
        label: "Username",
        name: "username",
        placeholder: "Enter your username here",
        required: true,
        type: "text",
        onChange: handleChange,
    };

    const passwordObj = {
        htmlFor: "password",
        label: "Password",
        name: "password",
        onChange: handleChange,
        onClickShowPassword: handleShowPassword,
        placeholder: "Enter your password here",
        required: true,
        value: password,
        showPassword: showPassword,
        type: showPassword ? ("text" as const) : ("password" as const),
    };

    const savePasswordObj = {
        checked: savePassword,
        htmlFor: "savePassword",
        label: "Save Password",
        name: "savePassword",
        onChange: () => setSavePassword(!savePassword),
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Login successful!");
        navigate("/atomic/dashboard");
    };
    return (
        <BaseLayout>
            <BaseCard>
                <BaseTitle title="Login Atomic" />

                <LoginForm
                    onSubmit={handleSubmit}
                    username={usernameObj}
                    password={passwordObj}
                    savePassword={savePasswordObj}
                />

                <BaseDivider />
                <FooterAuthForm
                    str="Don’t have an account? "
                    anchorStr="Register here"
                    href="/atomic/auth/register"
                />
            </BaseCard>
        </BaseLayout>
    );
};

export default LoginAtomic;
