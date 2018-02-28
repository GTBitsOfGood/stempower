import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer.js';
import BasicExample from './BasicExample';

export default function Root({ store }) {
    return (
        <Provider store={store}>
            <AppContainer />
            <BasicExample />
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
