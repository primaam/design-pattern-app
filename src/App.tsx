import React from "react";
import { Link } from "react-router";

function App() {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <header className="bg-blue-500 text-white p-4">
                <nav className="container mx-auto flex justify-between">
                    <Link to="/" className="block px-4 py-2 hover:underline">
                        Home
                    </Link>
                    <div className="relative">
                        <button className="bg-blue-700 p-2 rounded-md" onClick={toggleDropdown}>
                            Design Patterns
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute bg-white text-black shadow-lg rounded-md mt-2 w-48">
                                <Link
                                    to="feature-based"
                                    className="block px-4 py-2 hover:bg-gray-200 rounded-t"
                                >
                                    Feature-Based
                                </Link>
                                <Link
                                    to="container-presentational"
                                    className="block px-4 py-2 hover:bg-gray-200"
                                >
                                    Container-Presentational
                                </Link>
                                <Link
                                    to="atomic"
                                    className="block px-4 py-2 hover:bg-gray-200 rounded-b"
                                >
                                    Atomic
                                </Link>
                            </div>
                        )}
                    </div>
                </nav>
            </header>
            <div
                onClick={() => setIsDropdownOpen(false)}
                className="flex items-center justify-center h-screen w-full"
            >
                <div className="w-full max-w-4xl border-2 border-gray-400 p-8 rounded-xl shadow-xl ml-4 mr-4">
                    <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
                        Main Navigation
                    </h2>
                    <p className="text-center text-gray-700 opacity-80">
                        Choose your design pattern at the header.
                    </p>
                </div>
            </div>
        </>
    );
}

export default App;
