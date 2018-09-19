import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import Form from '../components/Form';

const AppContainer = () => {
    return (
        <div>
            Submitting doesn't really work <Form/>
        </div>
    );
};


AppContainer.propTypes = {
    info: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        input: state.input
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
