import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/stylesheets/base.scss';

render(
    <Root />,
    document.getElementById('root')
);
