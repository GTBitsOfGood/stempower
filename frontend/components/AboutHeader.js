import React from 'react';
import { connect } from 'react-redux';


class AboutHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            about: props.about
        }
    }

    render() {
        return (
            <div className="profile-about">
                <div className="display-flex flex-item">
                    <label className="flex-item profile-name">{this.state.about.name}</label>
                    <div className="flex-item">{this.state.about.education}</div>
                    <div className="flex-item">{this.state.about.email}</div>
                    <div className="flex-item">{this.state.about.phone}</div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        about: state.about
    };
}

export default connect(mapStateToProps)(AboutHeader);