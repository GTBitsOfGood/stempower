import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addBioInfo } from '../actions/index';


class AddBioInfo extends Component {

	/*constructor(props) {
        super(props);
        this.state = {
            name: '',
            college: '',
            year: '',
            //bio: '',
            bioInfos: {}
        };
    }

    addBioInfo(header, content) {
        this.setState(this.state, {content: content});
    }
    componentWillMount() {
        axios.get('/api/mentors/1').then(({ data }) => {
            console.log(data.mentor);
            const mentor = data.mentor;
            this.setState({name: mentor.name, college: mentor.college, year: mentor.year, bioInfos: mentor.bioInfos})//, bio: mentor.bio})
        })
    } */
	constructor(props) {
		super(props);
		this.state = {
			content: ''
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.submitBioInfo = this.submitBioInfo.bind(this);
	}

	submitBioInfo() {
		const { content } = this.state.content;
		const state = this.state
		
		const{ add } = this.props;
		add(state);
		this.setState(state.content)
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