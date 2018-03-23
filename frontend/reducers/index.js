import * as types from '../actions/types';
/*

In this file we see that the root reducers default parameter is an ojbect
called "state" containing just {name: 'Stempower'}.

Inside the reducers switch statement we see that the default case is to just
return this parameter. Where is it involed? In configureStore.js

*/

function rootReducer(state = {name: 'Stempower'}, action) {
    switch (action.type) {
    	case types.ADD_BIO_INFO:
    		return Object.assign({}, state, {
    			bioInfo:[...state.bioInfo,
    				content: action.content,
    				header: action.header
    			]}
    		);
    		break
        default:
            return state;
    }
}

export default rootReducer;
