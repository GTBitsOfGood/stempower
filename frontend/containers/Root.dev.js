import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer.js';
import DevTools from './DevTools';

/*
    The only props for the root component is the Redux store.
*/

export default function Root({ store }) {
    return (
        <Provider store={store}>
            <div>
                <AppContainer />
                <DevTools />
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
