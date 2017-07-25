export const LANG_CHANGE = 'LANG_CHANGE';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login(username, password) {
    return {
        type: LOGIN,
        username,
        password
    }
}
