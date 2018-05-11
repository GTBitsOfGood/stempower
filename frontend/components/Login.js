import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createHashHistory } from 'history';

const Login = (props) => {
    return (
        <div>
            <b>Login Screen</b><br/>
            <form>
                Email:<br/>
                <input type="text" name="email"/><br/>
                Password:<br/>
                <input type="text" name="password"/><br/>
            </form>
            <button type="submit" onClick={() => props.history.push('/basicExample')}>Submit</button>
        </div>
    );
}

export default Login;