import React from 'react'

class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-3 col-md-2 sidebar">
                  <ul className="nav nav-sidebar">
                    <li className="active"><a href="#">Overview <span className="sr-only">(current)</span></a></li>
                    <li><a href="#">Troop 29303</a></li>
                    <li><a href="#">Troop 29101</a></li>
                    <li><a href="#">Organization 3</a></li>
                    <li><a href="">Example Org</a></li>
                    <li><a href="">Organizatoin 4</a></li>
                  </ul>
                </div>
                <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                  <h1 className="page-header"><br /> </h1>

                  <div className="row placeholders">
                    <div className="col-xs-6 col-sm-3 placeholder">
                      <img src="pictures/org_leader.jpg" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail" />
                      <h4>Organization Leader</h4>
                      <div><span className="text-muted">Stock Photo</span></div>
                      <div><span className="text-muted">example@email.com</span></div>
                    </div>
                    <div className="col-xs-6 col-sm-3 placeholder">
                      <img src="pictures/mentor_example_2.png" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail" />
                      <h4>Mentor</h4>
                      <div><span className="text-muted">Devany</span></div>
                      <span className="text-muted">devany@gatech.edu</span>
                    </div>
                    <div className="col-xs-6 col-sm-3 placeholder">
                      <img src="pictures/mentor_example.jpg" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail" />
                      <h4>Mentor</h4>
                      <div><span className="text-muted">Sophia</span></div>
                      <span className="text-muted">sophia@gatech.edu</span>
                    </div>
                  </div>

                  <h2 className="sub-header">Membership</h2>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Member</th>
                          <th>Email</th>
                          <th>Registration Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Jenny</td>
                          <td>example@example.com</td>
                          <td>3/1/2018</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Laura</td>
                          <td>example@example.com</td>
                          <td>3/1/2018</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Vishali</td>
                          <td>example@example.com</td>
                          <td>3/1/2018</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Rosa</td>
                          <td>example@example.com</td>
                          <td>3/1/2018</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Jameisha</td>
                          <td>example@example.com</td>
                          <td>3/1/2018</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Erin</td>
                          <td>example@example.com</td>
                          <td>3/1/2018</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Erica</td>
                          <td>example@example.com</td>
                          <td>3/1/2018</td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>Lynn</td>
                          <td>example@example.com</td>
                          <td>3/1/2018</td>
                        </tr>
                        <tr>
                          <td>1,008</td>
                          <td>Fusce</td>
                          <td>nec</td>
                          <td>tellus</td>
                        </tr>
                        <tr>
                          <td>1,009</td>
                          <td>augue</td>
                          <td>semper</td>
                          <td>porta</td>
                        </tr>
                        <tr>
                          <td>1,010</td>
                          <td>massa</td>
                          <td>Vestibulum</td>
                          <td>lacinia</td>
                        </tr>
                        <tr>
                          <td>1,011</td>
                          <td>eget</td>
                          <td>nulla</td>
                          <td>className</td>
                        </tr>
                        <tr>
                          <td>1,012</td>
                          <td>taciti</td>
                          <td>sociosqu</td>
                          <td>ad</td>
                        </tr>
                        <tr>
                          <td>1,013</td>
                          <td>torquent</td>
                          <td>per</td>
                          <td>conubia</td>
                        </tr>
                        <tr>
                          <td>1,014</td>
                          <td>per</td>
                          <td>inceptos</td>
                          <td>himenaeos</td>
                        </tr>
                        <tr>
                          <td>1,015</td>
                          <td>sodales</td>
                          <td>ligula</td>
                          <td>in</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default Dashboard;