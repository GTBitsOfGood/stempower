import React from 'react';
import ReactTable from 'react-table';
import axios from 'axios';

class DashboardOrganizations extends React.Component{

	makeOrgList() {
		let outerdv = document.createElement("div");
		if (this.props.organizations != null && document.getElementById("dashboardOrganizationArray")) {
			document.getElementById("dashboardOrganizationArray").innerHTML = ""
			let data = this.props.organizations;

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
		} else if (this.props.currentOrganization) {
			this.props.curOrganization(this.props.currentOrganization);
		}
	}

	render() {

		return(
			<div className = "col-2">
				<br/>
				<div>Current Org: {this.props.currentOrganization ? this.props.currentOrganization.name : "None"}</div>
				<div>
					<input type="text" id="newMemberFirstName" defaultValue="First Name"/>
					<input type="text" id="newMemberLastName" defaultValue="Last Name"/>
					<button onClick={() => {
						let firstName = document.getElementById("newMemberFirstName").value;
						let lastName = document.getElementById("newMemberLastName").value;
						if (firstName != "First Name" && lastName != "Last Name") {
							let currentOrg = this.props.currentOrganization;
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
				<div>Organizations</div>
				<div id="dashboardOrganizationArray" onClick={this.makeOrgList()}/>
			</div>
	)};

}


export default DashboardOrganizations;
