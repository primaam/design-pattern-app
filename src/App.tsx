import React from "react";

function App() {
    const [username, setUsername] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!username || !password) {
            alert("Username and Password cannot be empty");
        } else {
            alert(`Welcome, ${username}!`);
        }
    };

    return (
        <div>
            <header>
                <nav></nav>
            </header>
            <div className="w-full h-full p-12">
                <div className="flex flex-col items-center justify-center border-8">
                    <h1>Login Page</h1>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="h-14 w-16 rounded-md bg-green-300" type="submit">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
