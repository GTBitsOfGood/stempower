/* Action types */

export const login = 'LOGIN';
export const logout = 'LOGOUT';
export const signup = 'SIGNUP';
export const delete_user = 'DELETE_USER';
export const find_user = 'FIND_USER';
export const find_all = 'FIND_ALL';

/* Action creators */

export function performSignup(user) {
    return { type: SIGNUP, user }
}

export function performLogin(email, password) {
    return { type: LOGIN, email, password }
}

export function performLogout() {
    return { type: LOGOUT }
}

export function deleteUser(id) {
    return { type: DELETE_USER, id }
}

export function findUser(id) {
    return { type: FIND_USER, id }
}

export function findAll() {
    return { type: FIND_ALL }
}