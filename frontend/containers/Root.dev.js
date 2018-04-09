import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer.js';
import DevTools from './DevTools';
import ImageUpload from './ImageUpload.js';
import ImageDisplay from './ImageDisplay.js';
import WelcomePage from './WelcomePage';
import { BrowserRouter } from "react-router-dom";

/*
    The only props for the root component is the Redux store.
*/

export default function Root({ store }) {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppContainer />
            </BrowserRouter>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
