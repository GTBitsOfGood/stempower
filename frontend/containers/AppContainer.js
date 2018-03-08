import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/LoginTitle';
import MemberPage from '../components/Login';
import { Switch, Route, Redirect, withRouter, Router } from 'react-router-dom';


const AppContainer = ({ name }) => {
    return (
        <Router>
            <div>
                <Route exact path ={'/loginTitle'} render={LoginTitle}/>
                <Route exact path = {'/login'} render={Login}/>
            </div>
        </Router>
    );
};

AppContainer.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = () => {
    return {
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer));
