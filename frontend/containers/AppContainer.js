import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import MemberPage from '../components/MemberPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const AppContainer = ({ name }) => {
    return (
        <Router>
            <div>
            <Route exact path="/" component={Title} />
            <Route path="/memberpage" component={MemberPage}/>
                <Route exact path={'/loginTitle'} render={LoginTitle}/>
                <Route exact path={'/login'} render={Login}/>
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

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);