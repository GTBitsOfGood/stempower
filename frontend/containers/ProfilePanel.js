import React from "react";
import { connect } from "react-redux";
import { fetchMentor } from "../actions/mentorActions.js";
import BioContainer from "./BioContainer";
import EditableLabel from "../components/EditableLabel.js";

class ProfilePanel extends React.Component {
  render() {
    const { onSave } = this.props;
    var info = this.props.mentor;
    return (
      <div id="user-profile">
        <div className="top">
          <Avatar image={info.photo} width={100} height={100} />
          <h2>
            {info.firstName} {info.lastName}
          </h2>
          <h3>{info.university}</h3>
          <hr />
          <EditableLabel
            editing={false}
            text={info.email}
            onSave={onSave}
            id={1}
          />
          {info.phoneNumber}
        </div>

        <div className="bottom">
          {/* <h3 style={{ marginBottom: 8 }}>Bios</h3> */}
          <BioContainer bioInfo={info.bios} />
        </div>
      </div>

      // <div className="profile-about">
      //     <label className="flex-item profile-name">{this.props.mentor.firstName} {this.props.mentor.lastName}</label>
      //     <div className="display-flex">
      //         <div className="flex-item">{this.props.mentor.university}</div>
      //     </div>
      //     <div className="flex-item">{this.props.mentor.email}</div>
      //     <div className="flex-item">{this.props.mentor.phoneNumber}</div>
      // </div>
    );
  }
}

class Avatar extends React.Component {
  render() {
    var image = this.props.image,
      style = {
        width: this.props.width || 50,
        height: this.props.height || 50
      };

    if (!image) return null;

    return (
      <div className="avatar" style={style}>
        <img src={this.props.image} />
      </div>
    );
  }
}

export default ProfilePanel;
