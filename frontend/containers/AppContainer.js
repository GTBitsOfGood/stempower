import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import MentorApplication from './MentorApplication';
import Profile from './Profile';
import Registration from './Registration';
import MemberPage from '../components/MemberPage';
import WelcomeScreen from'./WelcomePage';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LoginTitle from '../components/LoginTitle';
import Login from '../components/Login';
import Signup from '../components/Signup';
import ImageDisplay from './ImageDisplay';


import Navbar from '../components/Navbar';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={WelcomeScreen}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/signup' component={Signup}/>
                        <Route path='/upload' component={ImageDisplay}/>
                    </Switch>
                </Router>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);