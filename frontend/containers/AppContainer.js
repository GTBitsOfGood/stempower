import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import MemberPage from '../components/MemberPage';
import { Switch, Route, Redirect, withRouter, Router } from 'react-router-dom';


const AppContainer = ({ name }) => {
    return (
        <Router>
            <div>
                <Route exact path ={'/title'} render={Title}/>
                <Route exact path = {'/memberpage'} render={MemberPage}/>
                <Route exact path={'/loginTitle'} render={LoginTitle}/>
                <Route exact path={'/login'} render={Login}/>
            </div>
        </Router>
    );
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
