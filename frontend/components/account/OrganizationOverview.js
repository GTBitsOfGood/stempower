import React from 'react';

 class OrganizationOverview extends React.Component{

    render() {
        var c = this.props.mentors.length;
        console.log(this.props.mentor);
        var mentors = this.props.mentors.map(function(mentorData, i) {
            var append = i == c - 1 ? "" : ", ";
            // const id = mentorData[i]._id;
            if (c == 2 && i == 0) { 
                append = " and "; 
            } else if (i > 1 && i == c - 2) { 
                append = ", and "; 
            }
            return React.createElement("span", {
                key: mentorData
            }, React.createElement("a", {href: "/"}, mentorData), append);
        });
        return (
        <div style={{textAlign: "center", padding: 30}}>
            <h1>{this.props.organizationName}</h1>
            <p  className="lead">Your mentors are: {mentors} </p>
        </div>
    )};

}


export default OrganizationOverview;
