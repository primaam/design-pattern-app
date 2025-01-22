import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { MainContext } from "./MainContext";

function App() {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <MainContext.Provider value={{ isDropdownOpen, toggleDropdown }}>
            <AppRoutes />
        </MainContext.Provider>
    );
}

export default App;
