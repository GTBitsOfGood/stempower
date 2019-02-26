import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-banner">
        <div className="nav-item">
          <Link className="nav-link" to="/">
            Welcome Screen
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/profile">Profile</Link>
        </div>
        <div className="nav-item">
          <Link to="/account">Organization</Link>
        </div>
        <div className="nav-item">
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
    );
  }

  // render() {
  //     return (
  //         <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  //           <a className="navbar-brand" href="#">Top navbar</a>
  //           <button   className="navbar-toggler"
  //                     type="button"
  //                     data-toggle="collapse"
  //                     data-target="#navbarCollapse"
  //                     aria-controls="navbarCollapse"
  //                     aria-expanded="false"
  //                     aria-label="Toggle navigation">
  //             <span className="navbar-toggler-icon"></span>
  //           </button>
  //           <div className="collapse navbar-collapse" id="navbarCollapse">
  //             <ul className="navbar-nav mr-auto">
  //               <li className="nav-item active">
  //                 <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
  //               </li>
  //               <li className="nav-item">
  //                 <a className="nav-link" href="#">Link</a>
  //               </li>
  //               <li className="nav-item">
  //                 <a className="nav-link disabled" href="#">Disabled</a>
  //               </li>
  //             </ul>
  //           </div>
  //         </nav>
  //     )
  // }
}

export default Navbar;
