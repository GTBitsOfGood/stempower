import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <b>Login Screen</b><br/>
            <form>
                Email:<br/>
                <input type="text" name="email"/><br/>
                Password:<br/>
                <input type="text" name="password"/><br/>
            </form>
        </div>
    );
};

export default Login;