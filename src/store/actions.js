import { LOGGED_IN, LOGGED_OUT } from "./constants";

export const loggedIn = () => ({
    type: LOGGED_IN,
});

export const loggedOut = () => ({
    type: LOGGED_OUT,
});
