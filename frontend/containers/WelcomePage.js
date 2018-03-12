import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Redirect} from 'react-router';
import Login from '../components/Login';
// import Signup from '../components/Signup ';

const Button = require('react-button');

const WelcomePage = () => {
    return(
        <Router>
            <div>
            <Route exact path='/' component={WelcomeScreen}/>
            <Route path='/login' component={Login}/>
            {/* <Route path='/signup' component={Signup}/> */}
            </div>
        </Router>
    );
}

function login(event) {
    console.log("test");
    return <Redirect to={'/login'} />
}

const WelcomeScreen = () => {
    return (
        <div>
            <b>Stempower</b>
            <div>
                <h>Welcome to the Stempower website!</h><br/>
                <p>Please login or sign up if you don't have an account</p><br/>
                <Button href='/login'>Login</Button>
                {/* <Button href='/signup'>Signup</Button> */}
            </div>
        </div>
        
    );
}
export default WelcomePage;