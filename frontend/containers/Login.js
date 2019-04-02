import React from "react";
import Register from "./Register.js";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      register: false,
      logged_in: false
    };

    /* Bind the class function to the component object to that this
           method is in scope for the jsx */
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(
      this
    );
    this.setCredentials = this.setCredentials.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleRegister = this.toggleRegister.bind(this);
    this.checkLoginStatus();
  }

  render() {
    return <div>{this.toggleView()}</div>;
  }

  toggleView() {
    if (!this.state.register && !this.state.logged_in) {
      return (
        <div className="vertical-container-centered">
          <div className="vertical-container-centered">
            <h1>
              Welcome to <span className="primary-color">Stempower</span>
            </h1>
            <div style={{ width: "100%", marginBottom: "10px" }}>
              <input
                type="text"
                className="text-input"
                placeholder="username"
                onChange={this.handleUsernameChange}
              />
            </div>
            <div style={{ width: "100%" }}>
              <input
                type="password"
                className="text-input"
                placeholder="password"
                onChange={this.handlePasswordChange}
              />
            </div>
            <div style={{ marginLeft: "10px" }}>
              Do you need to{" "}
              <a href="javascript:void(0);" onClick={this.toggleRegister}>
                register?
              </a>
            </div>
            <br />
            <button onClick={this.setCredentials}>Login</button>
          </div>
        </div>
      );
    } else if (this.state.logged_in) {
      return (
        <div
          className="vertical-container-centered"
          style={{ marginTop: "10px" }}
        >
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    } else {
      return <Register toggleRegister={this.toggleRegister} />;
    }
  }

  checkLoginStatus() {
    axios
      .get("/api/user/logged_in")
      .then(res => {
        // console.log(res.data);
        if (res.data == "logged_in") {
          this.setState({ logged_in: true });
        } else {
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleLogout() {
    axios
      .post("api/user/logout")
      .then(res => {
        console.log(res);
        this.setState({ logged_in: false });
      })
      .catch(e => console.log(e.response.data));
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
    this.setState(
      Object.assign({}, this.state, { password: event.target.value })
    );
  }

  handleConfirmPasswordChange(event) {
    this.setState(
      Object.assign({}, this.state, { confirmPassword: event.target.value })
    );
  }

  toggleRegister(event) {
    // this.props.toggleRegister();
    this.setState({ register: !this.state.register });
  }

  setCredentials() {
    const { username, password } = this.state;
    if (username.length === 0) {
      alert("Please specify a valid username");
      return;
    }

    if (password.length < 6) {
      alert("Please specify a valid password");
      return;
    }

    // console.log(this.checkLoginStatus());
    /**
     * Because of the mapDispatchToProps function below, "setCredentials" is availble
     * from the props of this component
     */
    // this.props.setCredentials({ username: username, password: password });
    axios
      .post("api/user/login", {
        username: username,
        password: password
      })
      .then(res => {
        console.log(res);
        this.checkLoginStatus();
      })
      .catch(e => console.log(e.response.data));
  }
}

export default Login;
