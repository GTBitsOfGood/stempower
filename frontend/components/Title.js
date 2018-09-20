import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from './form';

var axios = require('axios')

class Title extends React.Component {

    render() {
        return (
            <Form />
        );
    }
}

Title.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
      t: state.t
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {};
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Title);
