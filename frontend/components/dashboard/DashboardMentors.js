import React from 'react';
import ReactTable from 'react-table';
import axios from 'axios';

class DashboardMentors extends React.Component{

	render() {
		var columns = []
		var data = []
		if (this.props.currentOrganization != null) {
			let currentOrg = this.props.currentOrganization
			data = currentOrg.mentors
			columns = [{
				Header: "Mentor Name",
				Cell: ({original}) => {
					if (original) {
						return (<a href={"/profile/" + original._id}>{original.firstName + " " + original.lastName}</a>) 
					} else {
						return (<div>Undefined</div>)
					}
				}
			}, {
				Header: "Organization",
				accessor: "organization"
			}, {
				width: 50,
				Header: "",
				Cell: ({original}) => ( <button onClick={() => {
					currentOrg.mentors.splice(currentOrg.mentors.indexOf(original), 1);
					original.organization = "";
					this.props.mentors[this.props.mentors.indexOf(this.props.mentors.find((mentor) => mentor._id == original._id))].organization = "";
					axios.delete('/api/organizations/' + currentOrg._id + "/mentors/" + original._id)
					axios.put('/api/mentors/' + original._id, original)
					this.props.allMentors(this.props.mentors);
				}}>
				X
				</button> )
			}]
		}
		return(
			<div className = "col">
				<ReactTable
				defaultPageSize = {10}
				data = {data}
				columns = {columns}
				/>
			</div>
		)
	};
		
}


export default DashboardMentors;