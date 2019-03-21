import React from "react";
import axios from "axios";

import OrganizationOverview from './../components/account/OrganizationOverview';
import OrganizationUpdates from './../components/account/OrganizationUpdates';
import OrganizationMentors from './../components/account/OrganizationMentors';
import OrganizationMeetingHistory from './../components/account/OrganizationMeetingHistory';
import OrganizationDocuments from './../components/account/OrganizationDocuments';
import OrganizationCalendar from './../components/account/OrganizationCalendar';
import OrganizationPaypal from './../components/account/OrganizationPaypal';
import ProfileCard from './ProfileCard'
import Profile from './Profile'
import './../assets/stylesheets/organization_styles.css';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mentors: [], elements: []};
  }

  componentWillMount() {
    axios.get("/api/mentors").then(({ data }) => {
      var mentors = [];
      for (var i = 0; i < data.length; i++) {
        var d = data[i];
        mentors.push({ name: d.firstName + " " + d.lastName, id: d._id });
      }
      this.setState({ mentors: mentors });
    });

    this.setState({elements: ["Meetings", "Documents", "Mentors", "Updates","Payment","Calender"]});
    if (this.props.view === "Organization")
      this.setState({elements: ["Documents"]});
    else if (this.props.view === "Parent")
      this.setState({elements: ["Meetings", "Documents", "Mentors", "Updates","Payment","Calender"]});
    else if (this.props.view === "Admin")
      this.setState({elements: ["Documents"]});
    else if (this.props.view === "Custom")
      this.setState({elements: this.props.elements});

  }

  getElement(index) {
    if (this.state.elements[index] === "Meetings")
      return <OrganizationMeetingHistory meetingHistory={["1/1/2016", "1/1/2017", "1/1/2018"]} />
    else if (this.state.elements[index] === "Documents")
      return <OrganizationDocuments />
    else if (this.state.elements[index] === "Mentors")
      return <OrganizationMentors mentors={this.state.mentors}/>
    else if (this.state.elements[index] === "Updates")
      return <OrganizationUpdates waiversNeeded={42} />
    else if (this.state.elements[index] === "Payment")
      return <OrganizationPaypal />
    else if (this.state.elements[index] === "Calender")
      return <OrganizationCalendar 
                embedUrl={"https://calendar.google.com/calendar/embed?src=bitsofgood.stempower%40gmail.com&ctz=America%2FNew_York"}
                width={300}
                height={200}
                align={"center"}
              />
    else
      return <div></div>
  }

    render() {
        return (
          <div className="container">
            <OrganizationOverview
              mentors={this.state.mentors}
              organizationName={"Troop 1234"}
            />
            <div>

            <table className = "table-bordered" width = "1200" >
              <tbody>
               <tr>
                  <td>
                    <div className="d-flex justify-content-center">
                      {this.getElement(0)}
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-center">
                      {this.getElement(1)}
                    </div>
                  </td>
                  <td>
                   <div className="d-flex justify-content-center">
                      {this.getElement(2)}
                    </div>
                  </td>
                    
               </tr>
               <tr>
                  <td>
                    <div className="d-flex justify-content-center">
                      {this.getElement(3)}
                    </div>
                    
                  </td>
                  <td>
                    <div className="d-flex justify-content-center">
                      {this.getElement(4)}
                    </div>
                  </td>
                  <td>
                    {this.getElement(5)}
                  </td>
               </tr>
              </tbody>
            </table>
            </div>

            <div>
              <p><br/><br/><br/></p>
            </div>
          </div>

        ) 
    }
};

export default Account;
