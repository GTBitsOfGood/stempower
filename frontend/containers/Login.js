import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { Redirect } from 'react-router';
import { createHashHistory } from 'history';

class Login extends React.Component {
	constructor(props) {
		super(props);
	}
	/* This needs to be factored out into a real login and / or register component */
	render(){
	    return (
	    	<div className="login-container">
	    		<div>
	    			<h1>Welcome to</h1>
	    			<h1>Stempower</h1>
    			</div>
	    		<div>
	        		<div >This is the username compoonent</div>
	        		<div><input type="text" placeholder="username"/></div>
	        		<div >This is the password compoonent</div>
	        		<div><input type="password" /></div>
        		</div>
    		</div>
    	);
	}
}

export default Login;