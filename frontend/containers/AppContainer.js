import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import MentorApplication from './MentorApplication';
import Profile from './Profile';
import Registration from './Registration';
import WelcomePage from'./WelcomePage';
import { Route, Link, Switch, withRouter } from "react-router-dom";
import LoginTitle from '../components/LoginTitle';
import Login from '../components/Login';
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
                {this.props.loggedin ? (<div><Navbar /></div>) : (<div></div>)}
                <div className="body-content">
                <Switch>
                    {this.props.loggedin ? (<div></div>) : (<Route exact path='/' component={WelcomePage}/>)}
                    <Route path='/login' component={Login}/>
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

const mapStateToProps = (state) => {
    return {
        name: state.name,
        loggedin: state.loggedin
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