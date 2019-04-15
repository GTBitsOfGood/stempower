import React from 'react'
import logo from './../assets/images/stempower_logo-3.png';
import axios from 'axios';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    axios
      .post("api/user/logout")
      .then(res => {
        this.setState({ logged_in: false });
      })
      .catch(e => console.log(e.response.data));
  }

  render() {
      if (this.props.logged_in) {
        return (
            <div className="nav">
                <a id="nav-logo" target="_blank" href="https://www.stempowerinc.org/"><img src={logo} /></a>
                <ul>
                    <li><a href="/account">Organization</a></li>
                    {this.props.userType=="admin" ? <li><a href="/dashboard">Dashboard</a></li> : null}
                    <li><a href="/" onClick={this.handleLogout}>Logout</a></li>
                </ul>
            </div>
            );
        } else {
            return (
                <div className="nav">
                    <a id="nav-logo" target="_blank" href="https://www.stempowerinc.org/"><img src={logo} /></a>
                </div>
                );
            }

      }
    
}

export default Navbar;
