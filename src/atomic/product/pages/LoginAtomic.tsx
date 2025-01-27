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
import { LoginForm } from "../../components/organism";

const LoginAtomic: React.FC = () => {
    const navigate = useNavigate();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [savePassword, setSavePassword] = React.useState(false);

    const [error, setError] = React.useState("");

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!username || !password) {
            setError("All fields are required.");
            return;
        }

        alert("Login successful!");
        navigate("/atomic/dashboard");
    };
    return (
        <BaseLayout>
            <BaseCard>
                <BaseTitle title="Login Atomic" />
                {error && <BaseErrorText errorMsg={`${error}`} />}
                <LoginForm
                    usernameAttribute={{
                        value: username,
                        name: "username",
                        onChange: handleChange,
                    }}
                    passwordAttribute={{
                        name: "password",
                        onChange: handleChange,
                        value: password,
                    }}
                    savePasswordAttribute={{
                        checked: savePassword,
                        onChange: () => setSavePassword(!savePassword),
                    }}
                    onSubmit={handleSubmit}
                    onClickShowPassword={handleShowPassword}
                    showPassword={showPassword}
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
