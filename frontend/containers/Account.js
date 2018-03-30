import React from 'react';

 class Account extends React.Component{
    render() {
        return (
          <div  className="container">
              {/*<!-- Jumbotron -->*/}
              <div  className="jumbotron">
                <h1>Troop 29303 John's Creek, Georgia</h1>
                <p  className="lead">Your mentors are: <a href='/'>Devany Sandoval</a> and <a href='/'>Sophia Yan</a></p>
                <p  className="lead">Your next meeting is on <a href='/'>4/11/2018</a> </p>
              </div>
        
              {/*<!-- Example row of columns -->*/}
              <div  className="row">
                <div  className="col-lg-4">
                  <h2>Updates!</h2>
                  <p  className="text-danger">13 members still need to upload participation waivers!</p>
                  <p> </p>
                  <p><a  className="btn btn-primary" href="#" role="button">Contact Your Mentors &raquo;</a></p>
                </div>
                <div  className="col-lg-4">
                  <h2>Meeting History</h2>
                  <ul>
                    <li>2/28/2018</li>
                    <li>3/14/2018</li>
                    <li>3/28/2018</li>
                  </ul>
                  <p><a  className="btn btn-primary" href="#" role="button">Provide Feedback &raquo;</a></p>
               </div>
                <div  className="col-lg-4">
                  <h2>Documents</h2>
                  <ul>
                  <li>Organization Application</li>
                  <li>Feedback</li>
                  <li>Waiver</li>
                  <li>Upload Photos</li>
                  </ul>
                </div>
              </div>
            </div>
        )
    }
};

export default Account;
