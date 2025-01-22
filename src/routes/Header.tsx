import React from "react";
import { Link, Outlet, useNavigate } from "react-router";
import { MainContext } from "../MainContext";

const Header: React.FC = () => {
    const navigate = useNavigate();
    const context = React.useContext(MainContext);

    if (!context) {
        throw new Error("MainContext must be used within MainContextProvider");
    }

    const { isDropdownOpen, toggleDropdown } = context;

    const handleNavigationHeader = (path: string) => {
        toggleDropdown();
        navigate(`${path}`);
    };

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
                                <a
                                    onClick={() => handleNavigationHeader("feature-based")}
                                    className="block px-4 py-2 w-100 hover:bg-gray-200 rounded-t"
                                >
                                    Feature-Based
                                </a>
                                <a
                                    onClick={() =>
                                        handleNavigationHeader("container-presentational")
                                    }
                                    className="block px-4 py-2 w-100 hover:bg-gray-200 rounded-t"
                                >
                                    Container-Presentational
                                </a>
                                <a
                                    onClick={() => handleNavigationHeader("atomic")}
                                    className="block px-4 py-2 w-100 hover:bg-gray-200 rounded-t"
                                >
                                    Atomic
                                </a>
                            </div>
                        )}
                    </div>
                </nav>
            </header>

            <Outlet />
        </>
    );
};

export default Header;
