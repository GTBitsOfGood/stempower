import React from 'react';
import ReactTable from 'react-table';
import axios from 'axios';

class DashboardOrganizations extends React.Component{

	makeOrgList() {
		if (this.props.states.organizations != null) {
			let data = this.props.states.organizations;

			let allOrgs = {
				"name": "All Organizations",
				"leaders": [],
				"members": [],
				"mentors": []
			};

			let children = []

			for (let x = 0; x < data.length; x++) {

				allOrgs.leaders = allOrgs.leaders.concat(data[x].leaders);
				allOrgs.members = allOrgs.members.concat(data[x].members);
				allOrgs.mentors = allOrgs.mentors.concat(data[x].mentors);
				
				let btn = React.createElement("a", {key: data[x]._id, onClick: () => this.props.curOrganization(data[x])}, data[x].name)
				children.push(React.createElement("div", {key: data[x]._id}, btn));
			}
			
			let btn = React.createElement("a", {key: allOrgs.name, onClick: () => this.props.curOrganization(allOrgs)}, allOrgs.name)
			children.unshift(React.createElement("div", {key: allOrgs.name}, btn))
			return(React.createElement("div", {}, children))
		}
	}

	deleteOrganization() {
		let curOrg = this.props.states.currentOrganization;
		let orgs = this.props.states.organizations
		orgs.splice(this.props.states.organizations.indexOf(curOrg), 1)
		this.props.organizations(orgs)

		for (let currentMentor in curOrg.mentors) {
			currentMentor = curOrg.mentors[currentMentor]
			this.props.states.allMentors.find((mentor) => currentMentor._id == mentor._id).organization = ""
			currentMentor.organization = ""
			axios.put('api/mentors/' + currentMentor._id, currentMentor)
		}	
		this.props.allMentors(this.props.states.allMentors)		

		this.props.curOrganization(orgs[0])
		axios.delete('api/organizations/' + curOrg._id)
	}

	render() {

		return(
			<div className = "col-2">
				<br />
				<div><h4>Organizations</h4></div>
				{this.makeOrgList()}
				<br />
				<div><h4>Current Org</h4>{this.props.states.currentOrganization ? this.props.states.currentOrganization.name : "None"}</div>
				<button onClick={() => this.deleteOrganization()}>Delete Organization</button>
				<br /><br />
				<div>
					<input type="text" id="newMemberFirstName" defaultValue="First Name"/>
					<input type="text" id="newMemberLastName" defaultValue="Last Name"/>
					<button onClick={() => {
						let firstName = document.getElementById("newMemberFirstName").value;
						let lastName = document.getElementById("newMemberLastName").value;
						if (firstName != "First Name" && lastName != "Last Name") {
							let currentOrg = this.props.states.currentOrganization;
							axios.post('/api/organizations/' + currentOrg._id + '/members/', {"member": firstName + " " + lastName}).then((org) => {
								currentOrg.members = org.data.members;
								this.props.curOrganization(currentOrg);
							});
							document.getElementById("newMemberFirstName").value = "First Name";
							document.getElementById("newMemberLastName").value = "Last Name";
						}
					}}>
					Add New Member</button>
				</div>
				<br /><br />
				
				
			</div>
	)};

}


export default DashboardOrganizations;
