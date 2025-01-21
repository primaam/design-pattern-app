import React from "react";

interface HomeProps {
    onClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-center h-screen w-full bg-transparent cursor-default"
        >
            <div className="w-full max-w-4xl border-2 border-gray-400 p-8 rounded-xl shadow-xl ml-4 mr-4">
                <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
                    Main Navigation
                </h2>
                <p className="text-center text-gray-700 opacity-80">
                    Choose your design pattern at the header.
                </p>
            </div>
        </button>
    );
};

export default Home;
