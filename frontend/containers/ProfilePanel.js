import React from "react";
import { connect } from "react-redux";
import { fetchMentor } from "../actions/mentorActions.js";
import BioContainer from "./BioContainer";
import EditableLabel from "../components/EditableLabel.js";

class ProfilePanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { onSave } = this.props;
    var info = this.props.mentor;
    return (
      <div>
        <div className="top">
          <Avatar image={info.profilePictureURL} width={100} height={100} />
          <h2>
            {info.firstName} {info.lastName}
          </h2>
          {this.toggleView()}
          {/* <EditableLabel
            editing={false}
            text={info.phoneNumber}
            onSave={onSave}
            id={2}
          /> */}
        </div>

        <div className="bottom">
          {/* <h3 style={{ marginBottom: 8 }}>Bios</h3> */}
          <BioContainer
            bioInfo={info.bios}
            isEditing={this.props.isEditing}
            profile={this.props.profile}
          />
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

  toggleView() {
    if (!this.props.isEditing) return this.normalView();
    else return this.editView();
  }

  handleChange() {
    var profile = this.props.profile;
    var newVals = this.refs;

    var temp = profile.state.mentor;
    temp.email = newVals.email.value;
    temp.phoneNumber = newVals.phone.value;
    temp.university = newVals.university.value;

    profile.setState({ mentor: temp });
  }

  normalView() {
    var info = this.props.mentor;
    return (
      <div>
        <h3>{info.university}</h3>
        <hr />
        <p>
          {info.email} | {info.phoneNumber}
        </p>
      </div>
    );
  }

  editView() {
    var info = this.props.mentor;
    return (
      <div>
        <h3>
          {" "}
          <textarea
            ref="university"
            defaultValue={info.university}
            onChange={this.handleChange}
          />
        </h3>
        <hr />
        <p>
          <textarea
            ref="email"
            defaultValue={info.email}
            onChange={this.handleChange}
          />{" "}
          |{" "}
          <textarea
            ref="phone"
            defaultValue={info.phoneNumber}
            onChange={this.handleChange}
          />
        </p>
      </div>
    );
  }
}

export default ProfilePanel;

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
