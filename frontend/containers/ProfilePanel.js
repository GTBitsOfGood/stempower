import React from "react";
import { connect } from "react-redux";
import { fetchMentor } from "../actions/mentorActions.js";
import BioContainer from "./BioContainer";

class ProfilePanel extends React.Component {
  render() {
    var info = this.props.mentor;
    return (
      <div id="user-profile">
        <div className="top">
          <h2>
            {info.firstName} {info.lastName}
          </h2>
          <h3>{info.university}</h3>

          <hr />
          <p>
            {info.email} | {info.phone}
          </p>
        </div>

        <div className="bottom">
          <h3 style={{ marginBottom: 8 }}>Bios</h3>
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

export default ProfilePanel;
