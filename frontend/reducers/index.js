import * as types from '../actions/types';
/*

In this file we see that the root reducers default parameter is an ojbect
called "state" containing just {name: 'Stempower'}.

Inside the reducers switch statement we see that the default case is to just
return this parameter. Where is it involed? In configureStore.js

*/

import defaultState from './defaultState';

function rootReducer(state = defaultState, action) {
    switch (action.type) {
        case types.LOGIN:
            return Object.assign({}, state, {
                login: true,
                username: action.username
            });
        default:
            return state;
    }
}

export default rootReducer;
