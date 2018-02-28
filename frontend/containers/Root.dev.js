import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer.js';
import DevTools from './DevTools';
import ImageUpload from './ImageUpload.js';

export default function Root({ store }) {
    return (
        <Provider store={store}>
            <div>
                <AppContainer />
                <ImageUpload />
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
