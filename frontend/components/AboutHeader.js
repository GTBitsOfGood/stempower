import React from 'react';
import { connect } from 'react-redux';
import { fetchMentor } from '../actions/mentorActions.js'


class AboutHeader extends React.Component {
    constructor(props) {
        super(props);
        this.fields = {
            name: props.name,
            education: props.education,
            email: props.email,
            phone: props.phone
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchMentor());
    }

    render() {
        return (
            <div className="profile-about">
                <label className="flex-item profile-name">{this.fields.name}</label>
                <div className="display-flex">
                    <div className="flex-item">{this.fields.education}</div>
                </div>
                <div className="flex-item">{this.fields.email}</div>
                <div className="flex-item">{this.fields.phone}</div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        name: state.firstName + ' ' + state.lastName,
        education: state.university,
        email: state.email,
        phone: state.phoneNumber
    };
}

export default connect(mapStateToProps)(AboutHeader);