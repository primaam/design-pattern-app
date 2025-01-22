import React from "react";

interface MainContextType {
    isDropdownOpen: boolean;
    toggleDropdown: () => void;
}

export const MainContext = React.createContext<MainContextType | null>(null);
