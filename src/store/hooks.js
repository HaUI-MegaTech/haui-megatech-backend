import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
    const [authed, dispatch] = useContext(AuthContext);
    return [authed, dispatch];
};
