import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
	constructor(props) {
	super(props);
	this.state = {value: ''};
	}

Submit(event) {
	this.setState({value: event.target.value});
}

render() {
	return (
		<form onSubmit={this.Submit}>
			<div>
			Info:
			<input type="text"/>
			</div>
			<input type="submit"/>
		</form>
		);
	}
}

export default Form;