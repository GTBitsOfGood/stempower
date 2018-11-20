import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import MentorApplication from './MentorApplication';
import Profile from './Profile';
import Registration from './Registration';
import Login from'./Login';
import { Route, Link, Switch, withRouter } from "react-router-dom";
import ImageUpload from '../components/ImageUpload';
import Organization from './Organization';
import Dashboard from './Dashboard';
import Navbar from '../components/Navbar';
import Availability from './Availability';



class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }   

    render() {
        return (
            <div className="body-content">
                <div style={{height:"50px"}}>
                    {this.props.loggedin ? (<div><Navbar /></div>) : (<div></div>)}
                    <div className="body-content">
                    <Switch>
                        {this.props.loggedin ? (<div></div>) : (<Route exact path='/' component={Login}/>)}
                        <Route path='/upload' component={ImageUpload}/>
                        <Route path='/profile/:id' component={Profile} />
                        <Route path='/organization' component={Organization} />
                        <Route path='/dashboard' component={Dashboard} />
                    </Switch>
                    </div>
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