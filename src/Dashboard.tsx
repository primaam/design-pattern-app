import React from "react";
import { PaperAirplaneIcon, ArrowUpCircleIcon } from "@heroicons/react/24/solid";

const Dashboard: React.FC = () => {
    const [inputValue, setInputValue] = React.useState<string>(""); // State untuk input
    const [messages, setMessages] = React.useState<string[]>([]); // State untuk pesan yang disubmit
    const [isLoading, setIsLoading] = React.useState<boolean>(false); // State untuk loading spinner
    const [isMessageSubmitted, setIsMessageSubmitted] = React.useState<boolean>(false); // Menandakan apakah pesan sudah disubmit

    // Fungsi untuk menangani submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (inputValue.trim()) {
            setIsLoading(true); // Mulai loading saat submit
            setTimeout(() => {
                setMessages((prevMessages) => [...prevMessages, inputValue]); // Menambahkan pesan ke state
                setInputValue(""); // Reset input value
                setIsMessageSubmitted(true); // Set pesan sudah disubmit
                setIsLoading(false); // Selesai loading
            }, 1500); // Simulasi loading selama 1.5 detik
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-md mx-auto mt-8 flex-1">
                {/* Menampilkan pesan yang sudah disubmit */}
                <div className="space-y-2 mb-4 max-h-[70vh] overflow-auto">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 p-3 rounded-lg text-gray-800 max-w-xs"
                        >
                            {message}
                        </div>
                    ))}
                </div>

                {/* Form input yang sticky di bawah */}
                <div className="sticky bottom-0 bg-white p-4 shadow-md w-full">
                    <form
                        onSubmit={handleSubmit}
                        className="flex items-center justify-center w-full h-20 space-x-2"
                    >
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Ada hal yang ingin Anda diskusikan?"
                            className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200"
                        />
                        <button
                            type="submit"
                            className="p-2 text-gray-500 rounded-md hover:text-gray-700"
                        >
                            <PaperAirplaneIcon className="h-6 w-6" />
                        </button>
                    </form>
                </div>

                {/* Loading spinner */}
                {isLoading && (
                    <div className="flex justify-center mt-4">
                        <div className="animate-spin h-6 w-6 border-4 border-t-4 border-gray-400 rounded-full"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
