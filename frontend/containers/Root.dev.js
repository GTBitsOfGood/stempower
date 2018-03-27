import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer.js';
import DevTools from './DevTools';
import ImageUpload from './ImageUpload.js';
import ImageDisplay from './ImageDisplay.js';
import WelcomePage from './WelcomePage';

/*
    The only props for the root component is the Redux store.
*/

export default function Root({ store }) {
    return (
        <div>
            <ImageUpload />
            <ImageDisplay name="sophia-pic"/>
        </div>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
