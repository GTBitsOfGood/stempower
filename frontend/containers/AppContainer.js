import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import MentorApplication from './MentorApplication';
import Profile from './Profile';
import Registration from './Registration';
import MemberPage from '../components/MemberPage';
import WelcomeScreen from'./WelcomePage';
import { Route, Link, Switch, withRouter } from "react-router-dom";
import LoginTitle from '../components/LoginTitle';
import Login from '../components/Login';
import Signup from '../components/Signup';
import ImageUpload from './ImageUpload';
import Account from './Account';
import Dashboard from './Dashboard';


import Navbar from '../components/Navbar';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }   

    render() {
        return (
            <div style={{height:"50px"}}>
                <div><Navbar /></div>
                <div className="body-content">
                <Switch>
                    <Route exact path='/' component={WelcomeScreen}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/upload' component={ImageUpload}/>
                    <Route path='/profile' component={Profile} />
                    <Route path='/account' component={Account} />
                    <Route path='/memberpage' component={MemberPage} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/application' component={MentorApplication} />
                </Switch>
                </div>
            </div>
        );    
    }
    
};

AppContainer.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer));