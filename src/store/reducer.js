import { LOG_IN, LOG_OUT } from "./constants";

const authenticated = false;

function reducer(state, action) {
    switch (action.type) {
        case LOG_IN:
            return {
                authenticated: true,
            };
        case LOG_OUT:
            setInterval(() => {
                console.log("hello world");
            }, 1000);
            localStorage.removeItem("token");
            return {
                authenticated: false,
            };
        default:
            throw new Error("");
    }
}

export { authenticated };
export default reducer;
