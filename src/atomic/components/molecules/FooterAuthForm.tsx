import React from "react";
import { PrimaryText } from "../atoms";

interface FooterAuthFormProps {
    str: string;
    anchorStr: string;
    href: string;
}

const FooterAuthForm: React.FC<FooterAuthFormProps> = ({ str, anchorStr, href }) => {
    return (
        <div className="text-center">
            <PrimaryText>
                {str}
                <a href={href} className="text-blue-500 hover:underline">
                    {anchorStr}
                </a>
            </PrimaryText>
        </div>
    );
};

export default FooterAuthForm;
