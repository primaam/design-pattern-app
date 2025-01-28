import React from "react";

interface FooterAuthProps {
    str: string;
    urlStr: string;
    url: string;
}

const FooterAuth: React.FC<FooterAuthProps> = ({ str, url = "/", urlStr }) => {
    return (
        <div className="text-center">
            <p className="text-sm text-gray-700">
                {str}
                <a href={url} className="text-blue-500 hover:underline">
                    {urlStr}
                </a>
            </p>
        </div>
    );
};

export default FooterAuth;
