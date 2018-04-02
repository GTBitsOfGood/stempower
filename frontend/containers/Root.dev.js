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
<<<<<<< HEAD
        <div>
            <ImageUpload />
            <ImageDisplay name="sophia-pic"/>
        </div>
=======
        <Provider store={store}>
            <BrowserRouter>
                <AppContainer />
            </BrowserRouter>
        </Provider>

>>>>>>> eead7c165f0db61d6cfa60ef7e031d38a0b57732
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
