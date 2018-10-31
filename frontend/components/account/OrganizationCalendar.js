import React from 'react';

class OrganizationCalendar extends React.Component{

   render() {
       return (
        <p style={{textAlign: this.props.align}}><iframe src={this.props.embedUrl} style={{border: 0}} width={this.props.width} height={this.props.height} frameBorder={0} scrolling={"no"}></iframe></p>
   )};

}


export default OrganizationCalendar;
