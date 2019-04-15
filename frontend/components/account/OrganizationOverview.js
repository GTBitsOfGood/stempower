import React from 'react';

 class OrganizationOverview extends React.Component{

    render() {
        return (
        <div style={{textAlign: "center", padding: 30}}>
            <h1>{this.props.organizationName}</h1>
        </div>
    )};
}


export default OrganizationOverview;
