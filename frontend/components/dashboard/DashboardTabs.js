import React from 'react';

class DashboardTabs extends React.Component{

	render() {
		return(
			<div>
				<button onClick = {() => this.props.currentTab("organizationView")}>View Organizations</button>
				<button onClick = {() => this.props.currentTab("documentView")}>View Documents</button>
				<button onClick = {() => this.props.currentTab("mentorView")}>View All Mentors</button>
			</div>
		)
	};
		
}


export default DashboardTabs;