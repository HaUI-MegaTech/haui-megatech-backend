import { LOGGED_IN, LOGGED_OUT } from "./constants";

const initState = false;

function reducer(state, action) {
    switch (action.type) {
        case LOGGED_IN:
            return {
                initState: true,
            };
        case LOGGED_OUT:
            return {
                initState: false,
            };
        default:
            throw new Error("");
    }
}

export { initState };
export default reducer;
