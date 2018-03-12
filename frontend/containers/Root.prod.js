import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer.js';
import BasicExample from './BasicExample';
import WelcomePage from './WelcomePage';

export default function Root({ store }) {
    return (
        <Provider store={store}>
            <AppContainer />
            <WelcomePage />
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
