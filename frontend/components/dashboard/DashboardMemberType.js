import React from 'react';

class DashboardMemberType extends React.Component{

	render() {
		return(
			<div>
			In current organization view: 
				<div>
					<button onClick = {() => this.props.currentMemberType("mentor")}>Mentors</button>
					<button onClick = {() => this.props.currentMemberType("leader")}>Leaders</button>
					<button onClick = {() => this.props.currentMemberType("member")}>Members</button>
				</div>
			</div>
		)
	};
		
}


export default DashboardMemberType;