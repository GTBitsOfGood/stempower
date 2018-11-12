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
import ImageUpload from '../components/ImageUpload';
import Account from './Account';
import Dashboard from './Dashboard';
import Navbar from '../components/Navbar';
import Availability from './Availability';
import UploadDocument from '../components/UploadDocument';
import DownloadDocument from '../components/DownloadDocument';



class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }   

    render() {
        return (
            <div>
            <div style={{height:"50px"}}>
                <div><Navbar /></div>
                <div><UploadDocument /></div>
                <div><DownloadDocument /></div>
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