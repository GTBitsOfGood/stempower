/*

In this file we see that the root reducers default parameter is an ojbect
called "state" containing just {name: 'Stempower'}.

Inside the reducers switch statement we see that the default case is to just
return this parameter. Where is it involed? In configureStore.js

*/

function rootReducer(state = {name: 'Stempower'}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default rootReducer;
