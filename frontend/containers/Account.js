import React from "react";
import axios from "axios";

import { Redirect } from 'react-router-dom'

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
    if (this.props.mentorId == null && this.props.orgId == null) {
      return;
    }
    
    if (this.props.orgId != null) {
      axios.get("/api/organizations/" + this.props.orgId).then(({ data }) => {
        this.setState({organizationName: data.name})
      });
    } else if (this.props.mentorId != null) {
      axios.get("/api/mentors/" + this.props.mentorId).then(({ data }) => {
        axios.get("/api/organizations/" + data.organization).then(({ data }) => {
          this.setState({organizationName: data.name});
          axios.get("/api/organizations/" + data._id + "/mentors").then(({data}) => {
            var mentors = [];
            for (var i = 0; i < data.length; i++) {
              var d = data[i];
              mentors.push({ name: d.name, id: d._id });
            }
            this.setState({ mentors: mentors });
          });
        });
      });
    }
    if (this.props.userType == "organization") {
      this.setState({elements: ["Updates", "Documents", "Mentors", "Calender",  "Meetings", "Payment"]});
    } else if (this.props.userType == "parent") {
      this.setState({elements: ["Meetings", "Documents", "Calender"]});
    } else if (this.props.userType == "admin") {
      this.setState({elements: ["Updates", "Documents", "Mentors", "Calender",  "Meetings", "Payment"]});
    } else if (this.props.userType == "mentor") {
      this.setState({elements: ["Updates", "Documents", "Mentors", "Calender", "Meetings"]});
    } else if (this.props.userType == "Custom") {
      this.setState({elements: this.state.elements});
    }
}


  getElement(index) {
    if (this.state.elements[index] === "Meetings")
      return <OrganizationMeetingHistory meetingHistory={["1/26/2017", "1/26/2018", "1/26/2019"]} />
    else if (this.state.elements[index] === "Documents")
      return <OrganizationDocuments />
    else if (this.state.elements[index] === "Mentors")
      return <OrganizationMentors mentors={this.state.mentors} mentorId={this.state.mentorId}/>
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
      if (!this.props.logged_in) {
        return (
          <Redirect to='/' />
        );
      }
        return (
          <div className="container">
            <OrganizationOverview
              mentors={this.state.mentors}
              organizationName={this.state.organizationName}
            />
            <div>

            <table className = "table-bordered" width = "1100" >
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
