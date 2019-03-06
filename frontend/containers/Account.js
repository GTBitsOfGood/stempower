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
    this.state = { mentors: [] };
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
                      <OrganizationMeetingHistory
                        meetingHistory={["1/1/2016", "1/1/2017", "1/1/2018"]}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <OrganizationDocuments />
                    </div>
                  </td>
                  <td>
                   <div className="d-flex justify-content-center">
                      <OrganizationMentors mentors={this.state.mentors}/>
                    </div>
                  </td>
                    
               </tr>
               <tr>
                  <td>
                    <div className="d-flex justify-content-center">
                      <OrganizationUpdates
                        waiversNeeded={42}
                      />
                    </div>
                    
                  </td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <OrganizationPaypal/>
                    </div>
                  </td>
                  <td>
                    <OrganizationCalendar 
                  embedUrl={"https://calendar.google.com/calendar/embed?src=bitsofgood.stempower%40gmail.com&ctz=America%2FNew_York"}
                  width={300}
                  height={200}
                  align={"center"}
                />
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
