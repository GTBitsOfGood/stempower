import React from 'react';
import AppContainer from './AppContainer.js';
import { BrowserRouter } from "react-router-dom";

/*
    The only props for the root component is the Redux store.
*/

export default function Root() {
    return (
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    );
}

