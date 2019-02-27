import React from 'react';

class OrganizationMeetingHistory extends React.Component{

   render() {
       var history = this.props.meetingHistory.map(function(date) {
           return <a href='#'><li key={date}>{date}</li></a>
       });
       return (
        <div >
            <h2>Meeting History</h2>
            <ul>{history}</ul>
            <p><a  className="btn btn-primary" href="#" role="button">View All Meetings &raquo;</a></p>
        </div>
   )};

}


export default OrganizationMeetingHistory;
