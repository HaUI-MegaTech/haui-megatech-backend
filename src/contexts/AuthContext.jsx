import { createContext, useReducer, useState } from "react";
import reducer, { initState } from "../store/reducer";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <AuthContext.Provider value={[state, dispatch]}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
