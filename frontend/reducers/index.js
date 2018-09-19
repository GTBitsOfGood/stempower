import * as types from '../actions/types';

function rootReducer(state = {info: 'Hello'}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default rootReducer;
