import { LOG_IN, LOG_OUT } from "./constants";

const initState = false;

function reducer(state, action) {
    switch (action.type) {
        case LOG_IN:
            return {
                initState: true,
            };
        case LOG_OUT:
            return {
                initState: false,
            };
        default:
            throw new Error("");
    }
}

export { initState };
export default reducer;
