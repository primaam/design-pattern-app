import React, { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    label: string;
}

const BaseLabel: React.FC<LabelProps> = ({ label, ...props }) => {
    return (
        <label {...props} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
    );
};

export default BaseLabel;
