import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addBioInfo } from '../actions/index';


class AddBioInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			header: '',
			content: ''
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.submitBioInfo = this.submitBioInfo.bind(this);
	}

	submitBioInfo() {
		const { content } = this.state.content;

		/**if (content.length == 0) {
			alert("Cannot submit empty bio information.");
			return;
		} */

		const{ add } = this.props;
		add(content);
	}

	handleInputChange(event) {
		this.setState({content: event.target.value});
	}

	render() {
		const { content } = this.state;
		return (
			<div>
				<input type='text' value={content} onChange={this.handleInputChange} />
				<button onClick={this.submitBioInfo}>Add</button>
				<button onClick={this.submitBioInfo}>Delete</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {};
}

const mapDispatchToProps = dispatch => {
	return {
		add: content => {
			dispatch(addBioInfo(content));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBioInfo);