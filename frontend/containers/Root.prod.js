import PropTypes from 'prop-types';
import React from 'react';
import AppContainer from './AppContainer.js';
import { BrowserRouter } from "react-router-dom";

export default function Root({ store }) {
    return (
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};