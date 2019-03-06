import React from 'react';

class OrganizationCalendar extends React.Component{

   render() {
       return (
       	<div>
	        <p style={{textAlign: this.props.align}}><iframe src={this.props.embedUrl} style={{border: 0}} width={this.props.width} height={this.props.height} frameBorder={0} scrolling={"no"}></iframe></p>
	        <p style={{textAlign: "center"}}><a href="https://calendar.google.com/calendar/r?cid=bitsofgood.stempower@gmail.com">Click here to view full calender</a></p>
        </div>
   )};

}


export default OrganizationCalendar;