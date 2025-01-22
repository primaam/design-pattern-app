import React from "react";
import { Link, Outlet } from "react-router";
import { MainContext } from "../MainContext";

const Header: React.FC = () => {
    const context = React.useContext(MainContext);

    if (!context) {
        throw new Error("MainContext must be used within MainContextProvider");
    }

    const { isDropdownOpen, toggleDropdown } = context;

    return (
        <>
            <header className="bg-blue-500 text-white p-4">
                <nav className="container mx-auto flex justify-between">
                    <Link to="/" className="block px-4 py-2 hover:underline">
                        Home
                    </Link>
                    <div className="relative">
                        <button
                            className="bg-blue-700 p-2 rounded-md"
                            // onBlur={toggleDropdown}
                            onClick={toggleDropdown}
                        >
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
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Header;
