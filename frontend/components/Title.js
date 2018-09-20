import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

var axios = require('axios')

class Title extends React.Component {

    constructor(props) {
        super(props);
        this.state = {t: "nothing read yet"};
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <input type="text" onChange={this.onSampleChange.bind(this)} />
                <button onClick={this.doBackendCall.bind(this)}>Just do it</button>
                <p>{this.state.t}</p>
            </div>
        );
    }

    doBackendCall() {
        var self = this;
        axios.post('/api/test', {input: this.state.sample})
        .then(function(response) {
            self.setState({t: response.data.result});
        });
    }

    onSampleChange(e) {
        this.setState({ sample: e.target.value });
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
