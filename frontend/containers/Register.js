import React from "react";
import ReactRadioButtonGroup from "react-radio-button-group";
import axios from "axios";

/* The flow should be WhatAreYou?, OrgTell/MentorTell, LandingPage */
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, props);
  }

  /* Bind the class function to the component object to that this
       method is in scope for the jsx */
  render() {
    return (
      <div className="vertical-container-centered full-center">
        <UserForm
          setCredentials={this.props.setCredentials}
          toggleRegister={this.props.toggleRegister}
        />
      </div>
    );
  }
}

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      userType: ""
    };

    /* Bind the class function to the component object to that this
           method is in scope for the jsx */
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(
      this
    );
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRBGSelect = this.handleRBGSelect.bind(this);
    this.setCredentials = this.setCredentials.bind(this);
    this.toggleRegister = this.toggleRegister.bind(this);
  }

  render() {
    return (
      <div className="vertical-container-centered">
          <h1>
            Register an <span className="primary-color">Account</span>
          </h1>
          <input
            type="text"
            className="text-input"
            placeholder="username"
            onChange={this.handleUsernameChange}
            style={{ marginBottom: "10px" }}
          />
          <input
            type="text"
            className="text-input"
            placeholder="email"
            onChange={e => this.setState({ email: e.target.value })}
            style={{ marginBottom: "10px" }}
          />
          <input
            type="password"
            className="text-input"
            placeholder="password"
            onChange={this.handlePasswordChange}
            style={{ marginBottom: "10px" }}
          />
          <input
            type="password"
            className="text-input"
            placeholder="confirm password"
            onChange={this.handleConfirmPasswordChange}
            style={{ marginBottom: "10px" }}
          />
          <div style={{ width: "100%" }}><h5> I am a: </h5></div>
          <div style={{ width: "100%" }}>
            <ReactRadioButtonGroup
              name="userTypeRBG"
              options={[
                { value: "parent", label: "Parent" },
                { value: "mentor", label: "Mentor" },
                { value: "organization", label: "Organization Leader" }
              ]}
              isStateful={true}
              onChange={val => this.handleRBGSelect(val)}
              labelClassName="radio-label"
            />
          </div>
          <p>
            Do you need to{" "}
            <a href="javascript:void(0);" onClick={this.toggleRegister}>
              login?
            </a>
          </p>
          <button onClick={this.setCredentials}>Register</button>
      </div>
    );
  }

  handleRBGSelect(value) {
    this.setState({ userType: value });
  }

  handleUsernameChange(event) {
    /**
     * This will update the state with out new value of the input,
     * which then gets passed to the input's value and causes the input to
     * be re-rendered.
     */
    this.setState(
      Object.assign({}, this.state, { username: event.target.value })
    );
  }

  handlePasswordChange(event) {
    /**
     * This will update the state with out new value of the input,
     * which then gets passed to the input's value and causes the input to
     * be re-rendered.
     */
    this.setState(
      Object.assign({}, this.state, { password: event.target.value })
    );
  }

  handleConfirmPasswordChange(event) {
    /**
     * This will update the state with out new value of the input,
     * which then gets passed to the input's value and causes the input to
     * be re-rendered.
     */
    this.setState(
      Object.assign({}, this.state, { confirmPassword: event.target.value })
    );
  }

  toggleRegister(event) {
    this.props.toggleRegister();
  }

  setCredentials() {
    const { username, password, confirmPassword, email, userType } = this.state;

    if (username.length === 0) {
      alert("Please specify a valid username");
      return;
    }

    if (password.length < 6) {
      alert("Please specify a valid password");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    /**
     * Because of the mapDispatchToProps function below, "setCredentials" is availble
     * from the props of this component
     */
    this.setState(Object.assign({}, this.state, { isMentor: true }));
    axios
      .post("api/user", {
        username: username,
        password: password,
        email: email,
        userType: userType
      })
      .then(res => {
        alert("Account Created!");
        toggleRegister();
      })
      .catch(e => alert(e.response.data));
    // this.props.setCredentials({ username: username, password: password });
  }
}

class WhatAreYou extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="vertical-container">
        <h1>
          Are you a <span className="primary-color">mentor</span> or an{" "}
          <span className="primary-color">organization leader</span>?
        </h1>
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <button style={{ marginBottom: "20px" }}>I'm a mentor!</button>
          <button>I lead an organization!</button>
        </div>
      </div>
    );
  }
}
class RegisterMentor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page-container">
        <div>
          <h1>
            What is the name of your{" "}
            <span className="primary-color">organization</span>?
          </h1>
        </div>
        <input
          type="text"
          className="text-input"
          placeholder="e.g. Girl's Who Code"
          onChange={this.handleUsernameChange}
          style={{ marginBottom: "10px" }}
        />
        <br />
        <div>
          <h1>
            What is your <span className="primary-color"> email address</span>?
          </h1>
        </div>
        <br />
        <input
          type="text"
          className="text-input"
          placeholder="jane@example.com"
          onChange={this.handleUsernameChange}
          style={{ marginBottom: "10px" }}
        />
      </div>
    );
  }
}
class RegisterOrganization extends React.Component {}

export default Register;
