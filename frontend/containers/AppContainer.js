import PropTypes from 'prop-types';
import React from 'react';
import MentorApplication from './MentorApplication';
import Profile from './Profile';
import Register from './Register';
import { Route, Switch, withRouter } from "react-router-dom";
import Login from './Login';
import Signup from '../components/Signup';
import ImageUpload from '../components/ImageUpload';
import Account from './Account';
import Dashboard from './Dashboard';
import Navbar from '../components/Navbar';
import Availability from './Availability';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }   

    render() {
        return (
            <div>
            <div style={{height:"50px"}}>
                <div><Navbar /></div>
                <div className="body-content">
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/upload' component={ImageUpload}/>
                    <Route path='/profile/:id' component={Profile} />
                    <Route path='/account' component={Account} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/application' component={Availability} />
                </Switch>
                </div>
            </div>
            <div id="footer" style={{height: "100%", backgroundColor:"white"}}>
            </div>
            </div>
        );    
    }
};

AppContainer.propTypes = {
    name: PropTypes.string,
};

export default withRouter(AppContainer);
