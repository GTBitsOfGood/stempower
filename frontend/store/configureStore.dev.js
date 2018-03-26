import { createStore, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

/*

This configureStore function initalizes the Redux store at start up using the
"Root Reducer". The reducer's job is to return a state for the Redux store.

*/

export function configureStore(initialState) {

    //Why is there an initialState passed to create store? Where does the
    //initial state get passed from? From the Index.js file.

    //I wonder what the compose function does? It's from Redux.
    return createStore(
        rootReducer,
        initialState,
        compose(
            DevTools.instrument()
        )
    );
}
