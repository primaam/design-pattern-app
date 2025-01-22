import React from "react";

interface TitleProps {
    title: string;
}

const BaseTitle: React.FC<TitleProps> = ({ title }) => {
    return <h1 className="text-2xl font-bold text-center mb-6">{title}</h1>;
};

export default BaseTitle;
