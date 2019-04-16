import React from 'react';

class DashboardTabs extends React.Component{

	render() {
		return(
			<div>
				<button onClick = {() => this.props.currentTab("organizationView")}>Manage Organizations</button>
				<button onClick = {() => this.props.currentTab("documentView")}>Manage Documents</button>
				<button onClick = {() => this.props.currentTab("mentorView")}>Manage All Mentors</button>
			</div>
		)
	};
		
}


export default DashboardTabs;