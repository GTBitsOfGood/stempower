import React from 'react';
import { render } from 'react-dom';
import { configureStore, history } from './store/configureStore';
import Root from './containers/Root';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/stylesheets/base.scss';



//This is the Redux store containing global state
const store = configureStore();

//The "props" of the "Root" component are defined / passed here. Declare them
//as parameters in the component do access them.
render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);
