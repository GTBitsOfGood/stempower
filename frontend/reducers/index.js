import { combineReducers } from 'redux';
import {
    LOGIN,
    LOGOUT,
    SIGNUP,
    DELETE_USER,
    FIND_USER,
    FIND_ALL
} from '../actions'

function rootReducer(state = {name: 'Horizons'}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default rootReducer;
