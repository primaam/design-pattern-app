import React, { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    children?: React.ReactNode
}

export interface InputPasswordProps extends InputProps {
    showPassword: boolean;
    onClickShowPassword: () => void;
}