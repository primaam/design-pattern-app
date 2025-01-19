import React from "react";
import { PaperAirplaneIcon, ArrowUpCircleIcon } from "@heroicons/react/24/solid";

const DashboardFeatureBased = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [inputValue, setInputValue] = React.useState<string>("");
    const [contentDashboard, setContentDashboard] = React.useState<string[]>([]);

    React.useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2500);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue) {
            setContentDashboard([...contentDashboard, inputValue]);
            setInputValue("");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {/* Spinner */}
            {isLoading && (
                <div
                    className={`opacity-100 scale-100 transform transition-opacity duration-500 
                          flex flex-col items-center justify-center absolute inset-0`}
                >
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                    <p className="mt-4 text-blue-600 font-medium">Loading...</p>
                </div>
            )}
            {!isLoading && (
                <>
                    {contentDashboard.length > 0 && (
                        <div className="fixed bottom-1/4 flex flex-col items-start w-11/12 max-w-4xl bg-white h-fit p-6 rounded-lg shadow-md mb-4">
                            <div className="flex flex-col items-start w-full max-h-96 overflow-y-auto p-4 rounded-md">
                                {contentDashboard.map((msg, i) => (
                                    <div
                                        key={i}
                                        className={`p-2 mb-2 rounded-md ${"bg-blue-100 self-end"}`}
                                    >
                                        <p>{msg}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div
                        className={`
                          flex flex-col items-center w-11/12 max-w-4xl bg-white p-6 rounded-lg shadow-md
                          transform transition-all duration-1000 ease-in
                          ${contentDashboard.length > 0 ? "fixed bottom-5" : ""}
                          `}
                    >
                        <h1
                            className={`text-xl transition-all duration-1000 font-bold text-center mb-6 text-black `}
                        >
                            Selamat datang, primaam! Apa kabar hari ini?
                        </h1>

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
                </>
            )}
        </div>
    );
};

export default DashboardFeatureBased;
