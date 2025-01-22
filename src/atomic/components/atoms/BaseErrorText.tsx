import React from "react";

interface ErrorTextProps {
    errorMsg: string;
}

const BaseErrorText: React.FC<ErrorTextProps> = ({ errorMsg }) => {
    return <p className="text-red-500 text-sm mb-4">{errorMsg}</p>;
};

export default BaseErrorText;
