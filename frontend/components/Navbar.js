import React from 'react'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
    return (
            <div className="nav-banner">
                <div className="nav-item">
                    <Link to='/'>
                        Welcome Screen
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to='/login'>
                        Login
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to='/signup'>
                        Signup
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to='/upload'>
                        Upload
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to='/profile'>
                        Profile
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to='/account'>
                        Account
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to='/dashboard'>
                        Dashboard
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to='/application'>
                        Application
                    </Link>
                </div>
            </div>
        )
    }   
}

export default Navbar;