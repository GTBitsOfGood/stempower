import React from 'react'
import logo from './../assets/images/stempower_logo-3.png';

class Navbar extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
    return (
            <div className="nav">
                {/* <img src={logo} /> */}
                <ul>
                    <li><a href="/">Welcome Screen</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/account">Organization</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;