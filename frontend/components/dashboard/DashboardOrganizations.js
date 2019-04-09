import React from 'react';
import ReactTable from 'react-table';
import axios from 'axios';

class DashboardOrganizations extends React.Component{

	makeOrgList() {
		let outerdv = document.createElement("div");
		if (this.props.states.organizations != null && document.getElementById("dashboardOrganizationArray")) {
			document.getElementById("dashboardOrganizationArray").innerHTML = ""
			let data = this.props.states.organizations;

			let allOrgs = {
				"name": "All Organizations",
				"leaders": [],
				"members": [],
				"mentors": []
			};

			for (let x = 0; x < data.length; x++) {

				allOrgs.leaders = allOrgs.leaders.concat(data[x].leaders);
				allOrgs.members = allOrgs.members.concat(data[x].members);
				allOrgs.mentors = allOrgs.mentors.concat(data[x].mentors);
				
				let dv = document.createElement("div");
				let btn = document.createElement("button");
				self = this;
				btn.onclick = function() {
					self.props.curOrganization(data[x]);
				}
				let t = document.createTextNode(data[x].name);
				btn.append(t);
				dv.append(btn);
				outerdv.appendChild(dv);
			}
			
			let dv = document.createElement("div");
			let btn = document.createElement("button");
			self = this;
			btn.onclick = function() {
				self.props.curOrganization(allOrgs);
			}
			let t = document.createTextNode(allOrgs.name);
			btn.append(t);
			dv.append(btn);
			outerdv.insertBefore(dv, outerdv.firstChild);	
			document.getElementById("dashboardOrganizationArray").append(outerdv);
		} else if (this.props.states.currentOrganization) {
			this.props.curOrganization(this.props.states.currentOrganization);
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
				<br/>
				<div>Current Org: {this.props.states.currentOrganization ? this.props.states.currentOrganization.name : "None"}</div>
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
					<button onClick={() => this.deleteOrganization()}>Delete Current Organization</button>
				</div>

				<div>Organizations</div>
				<div id="dashboardOrganizationArray" onClick={this.makeOrgList()}/>
			</div>
	)};

}


export default DashboardOrganizations;
