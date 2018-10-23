import React from 'react';

class OrganizationMeetingHistory extends React.Component{

   render() {
       var history = this.props.meetingHistory.map(function(date) {
           return <li key={date}>{date}</li>
       });
       return (
        <div>
            <h2>Meeting History</h2>
            <ul>{history}</ul>
            <p><a  className="btn btn-primary" href="#" role="button">Provide Feedback &raquo;</a></p>
        </div>
   )};

}


export default OrganizationMeetingHistory;
