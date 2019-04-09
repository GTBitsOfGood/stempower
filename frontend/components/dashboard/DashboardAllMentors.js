import React from 'react';
import ReactTable from 'react-table';
import axios from 'axios';

class DashboardAllMentors extends React.Component{

	reassign(mentor) {
		let reassignArray = document.getElementById("reassignArray")
		reassignArray.innerHTML = ""
		let orgs = this.props.organizations;

		for (let x = 0; x < orgs.length; x++) {

			let dv = document.createElement("div");
			let btn = document.createElement("button");
			self = this;
			btn.onclick = function() {
				if (mentor.organization != "") {
					orgs.find((org) => {
						if (org.name == mentor.organization) {
							let oldOrg = org.mentors.find((orgMentor) => orgMentor._id == mentor._id)
							if (oldOrg) {
								org.mentors.splice(org.mentors.indexOf(oldOrg), 1)
								axios.delete('/api/organizations/' + org._id + "/mentors/" + mentor._id)
								return true
							}
						}
					})	
				}
				mentor.organization = orgs[x].name
				axios.put('/api/mentors/' + mentor._id, mentor)
				orgs[x].mentors.push(mentor)
				let mentors = []
				axios.post('/api/organizations/' + orgs[x]._id + '/mentors', {mentor: mentor._id})
				self.props.allOrgs(orgs)
				if (self.props.currentOrganization._id == orgs[x]._id) {
					self.props.curOrganization(orgs[x])
				}
				document.getElementById("reassignArray").innerHTML = ""
			}
			let t = document.createTextNode(orgs[x].name);
			btn.append(t);
			dv.append(btn);
			reassignArray.appendChild(dv);
		}
	}

	render() {

		var columns = []
		var data = []
		if (this.props.mentors != null) {
			var mentors = this.props.mentors;
			data = mentors;
			columns = [{
				Header: "Mentor Name",
				Cell: ({original}) => React.createElement("a", {href: "/profile/" + original._id}, original.firstName + " " + original.lastName)
			}, {
				Header: "Pre Survey",
				Cell: ({original}) => {
					if (original.presurvey) {
						return(<button onClick={function() {console.log(original._id)}}>{original.presurvey.fileName}</button>)
					} else {
						return(<div>None</div>)
					}
				}
			}, {
				Header: "Organization Feedback",
				Cell: ({original}) => {
					if (original.organizationfeedback) {
						return(<button onClick={function() {console.log(original._id)}}>{original.organizationfeedback.fileName}</button>)
					} else {
						return(<div>None</div>)
					}
				}
			}, {
				Header: "Organization",
				Cell: ({original}) => {
					if (original.organization != "") {
						return(<div>{original.organization}</div>)
					} else {
						return(<div>None</div>)
					}
				}
			}, {
				Header: "Reassign Mentor",
				Cell: ({original}) => ( <button onClick={() => {this.reassign(original)}}>
				Reassign Mentor
				</button> )
			}, {
				Header: "Change Account Type",
				Cell: ({original}) => {
					if (!original.type || original.type == "default") {
						return (<div>
							<button onClick={() => {
							original.type = "admin"
							this.props.mentors.find((mentor) => mentor._id == original._id).type = "admin"
							this.props.allMentors(this.props.mentors)
						}}>
						Change to admin
						</button>
						Default</div>)
					} else {
						return (<div>
							<button onClick={() => {
							original.type = "default"
							this.props.mentors.find((mentor) => mentor._id == original._id).type = "default"
							this.props.allMentors(this.props.mentors)
						}}>
						Change to default
						</button>
						Admin</div>)
					}
				}
			}]
		}
		return(
			<div className = "col">
				<ReactTable
				defaultPageSize={10}
				data = {data}
				columns = {columns}
				/>
				<div id="reassignArray"/>
			</div>
		)
	};
		
}

export default DashboardAllMentors;