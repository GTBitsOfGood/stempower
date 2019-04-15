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
				if (mentor.organization) {
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
				mentor.organization = orgs[x]._id
				axios.put('/api/mentors/' + mentor._id, mentor).then(() => {
					mentor.organization = orgs[x].name ;
					orgs[x].mentors.push(mentor)
					self.props.allOrgs(orgs)
					if (self.props.currentOrganization._id == orgs[x]._id) {
						self.props.curOrganization(orgs[x])
					}	
				})
				axios.post('/api/organizations/' + orgs[x]._id + '/mentors', {mentor: mentor._id})
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
				Header: "Organization",
				Cell: ({original}) => {
					if (original.organization) {
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
			}, {
				Header: "Delete Mentor",
				Cell: ({original}) => ( <button onClick={() => {
					if (original.organization) {
						let mentorOrg = this.props.organizations.find((org) => org.name == original.organization && org.mentors.find((mentor) => mentor._id == original._id))
						let indx = this.props.organizations.indexOf(mentorOrg)
						mentorOrg.mentors.splice(mentorOrg.mentors.indexOf(original), 1);
						this.props.organizations[indx] = mentorOrg 
						this.props.allOrgs(this.props.organizations)
						axios.put('/api/organizations/' + mentorOrg._id, mentorOrg)	
					}
					this.props.mentors.splice(this.props.mentors.indexOf(this.props.mentors.find((mentor) => mentor._id == original._id)), 1);
					this.props.allMentors(this.props.mentors);
					axios.delete('/api/mentors/' + original._id)
				}}>
				X
				</button> )
			}]

			let index = 1;
			for (let documentType in this.props.documentTypes) {
				documentType = this.props.documentTypes[documentType]
				if (documentType.ownerType == "mentor") {
					columns.splice(index, 0, {
						Header: documentType.type,
						Cell: ({original}) => {
							if (original[documentType.type]) {
								return(<a href={original[documentType.type]}>{documentType.type}</a>)
							} else {
								return(<div>None</div>)
							}
						}
					})
					index++;
				}
			}
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