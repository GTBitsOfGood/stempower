import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import MentorApplication from './MentorApplication';
import Profile from './Profile';
import Registration from './Registration';
import MemberPage from '../components/MemberPage';
import { Switch, Route, Redirect, withRouter, Router } from 'react-router-dom';

import Navbar from '../components/Navbar';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            page: "Application"
        }
    }

    routePage(page) {
        switch(page){
            case "Profile":
                return(<Profile />)
            case "Registration":
                return(<Registration />)
            default:
                return(<MentorApplication />)        
        }
    }

    //<Navbar style={{float:"right"}} />

    render() {
        return (
        <Router>
            <div>
                <Title name={name} />
                <Route exact path ={'/title'} render={Title}/>
                <Route exact path = {'/memberpage'} render={MemberPage}/>
                <Navbar />
                {this.routePage(this.state.page)}
            </div>
        </Router>
        );    
    }
    
};

AppContainer.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => { //mapstatetoprops: passes shit in
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
