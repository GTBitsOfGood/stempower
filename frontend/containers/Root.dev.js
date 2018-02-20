import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer.js';
import DevTools from './DevTools';
import BasicExample from './BasicExample';

export default function Root({ store }) {
    return (
        <Provider store={store}>
            <div>
                <BasicExample />
                <DevTools />
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
