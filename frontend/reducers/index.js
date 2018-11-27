import * as types from '../actions/types';

function rootReducer(state = {name: 'Horizons'}, action) {
    switch (action.type) {
        case types.SET_CREDENTIALS:
            return Object.assign({}, state, {
                creds: action.creds
            });
        case types.REGISTER:
            return Object.assign({}, state, {
                register: !state.register
            });
        case types.IS_MENTOR:
            return Object.assign({}, state, {
                isMentor: true
            })
        default:
            return state;
    }
}

export default rootReducer;
