import * as types from '../actions/types';


function rootReducer(state = {name: 'Devany'}, action) {
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
