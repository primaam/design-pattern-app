import React, { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    label: string;
    htmlFor: string;
}

const BaseLabel: React.FC<LabelProps> = ({ label, htmlFor, ...props }) => {
    return (
        <label htmlFor={htmlFor} {...props} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
    );
};

export default BaseLabel;
