import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer.js';
import DevTools from './DevTools';
import BasicExample from './BasicExample';
import WelcomePage from './WelcomePage';

export default function Root({ store }) {
    return (
        <Provider store={store}>
            <div>
                <WelcomePage />
                <DevTools />
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
