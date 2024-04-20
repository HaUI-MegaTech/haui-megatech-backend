import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider(children) {
    const [token, setToken] = useState("");

    return (
        <AuthContext.Provider value={token}>{children}</AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
