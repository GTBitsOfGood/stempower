// Action Creators

import * as types from './types';

export function setUsername(creds) {
    return {
        type: types.SET_CREDENTIALS,
        creds: creds
    }
}

export function toggleRegister() {
    return {
        type: types.REGISTER
    }
}

export function isMentor() {
    return {
        type: types.IS_MENTOR
    }
}
