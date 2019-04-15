import React from 'react';


class AboutHeader extends React.Component {

    render() {
        return (
            <div className="profile-about">
                <label className="flex-item profile-name">{this.props.mentor.name}</label>
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