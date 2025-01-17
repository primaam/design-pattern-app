import React from "react";
import { PaperAirplaneIcon, ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import Dashboard from "./Dashboard";

function App() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [inputValue, setInputValue] = React.useState("");

    React.useEffect(() => {
        // Simulasi loading API selama 2-3 detik

        const timer = setTimeout(() => setIsLoading(false), 2500);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            console.log("User input:", inputValue);
            setInputValue(""); // Reset input setelah submit
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {/* Spinner */}
            {isLoading ? (
                <div
                    className={`opacity-100 scale-100 transform transition-opacity duration-500 flex flex-col items-center justify-center absolute inset-0`}
                >
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                    <p className="mt-4 text-blue-600 font-medium">Loading...</p>
                </div>
            ) : (
                <div
                    className={`flex flex-col items-center w-11/12 max-w-4xl bg-white p-6 rounded-lg shadow-md
              ${isLoading ? "opacity-0 scale-90" : "opacity-100 scale-100"} 
              transition-all duration-1000 ease-in`} // Apply transition to the entire container
                >
                    {/* Heading with transition */}
                    <h1
                        className={`transition-all duration-1000 font-bold text-center mb-6 text-black ${
                            isLoading ? "text-sm" : "text-xl"
                        } `}
                    >
                        Selamat datang, primaam! Apa kabar hari ini?
                    </h1>

                    {/* Content form */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex items-center justify-center w-full h-20 space-x-2"
                    >
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Ada hal yang ingin Anda diskusikan?"
                            className="h-12 px-4 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200"
                        />
                        <button
                            type="submit"
                            className="p-2 text-gray-500 rounded-md hover:text-gray-700"
                        >
                            <PaperAirplaneIcon className="h-6 w-6" />
                        </button>
                    </form>
                </div>
            )}
            {/* {isLoading ? (
                        <></>
                    ) : (
                        
                    )} */}
        </div>
        // <Dashboard />
    );
}

export default App;
