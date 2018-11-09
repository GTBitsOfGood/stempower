import React from 'react';
import { connect } from 'react-redux';
import { fetchMentor } from '../actions/mentorActions.js'


class AboutHeader extends React.Component {

    render() {
        return (
            <div className="profile-about">
                <label className="flex-item profile-name">{this.props.mentor.firstName} {this.props.mentor.lastName}</label>
                <div className="display-flex">
                    <div className="flex-item">{this.props.mentor.university}</div>
                </div>
                <div className="flex-item">{this.props.mentor.email}</div>
                <div className="flex-item">{this.props.mentor.phoneNumber}</div>
            </div>
        )
    }
};

export default AboutHeader;