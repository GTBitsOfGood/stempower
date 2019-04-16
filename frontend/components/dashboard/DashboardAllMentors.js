import React from 'react';
import ReactTable from 'react-table';

class DashboardAllMentors extends React.Component{

	render() {

		var columns = []
		var data = []
		if (this.props.mentors != null) {
			var mentors = this.props.mentors;
			data = mentors;
			columns = [{
				Header: "Mentor Name",
				Cell: ({original}) => React.createElement("a", {href: "/profile/" + original._id}, original.name)
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
					if (original.organization) {
						return(<div>{original.organization}</div>)
					} else {
						return(<div>None</div>)
					}
				}
			}, {
				Header: "Reassign Mentor",
				Cell: ({original}) => ( <button onClick={() => {
					//currentOrg[original.orgNumber].mentors.splice(currentOrg[original.orgNumber].mentors.indexOf(original), 1)
					this.forceUpdate();
				}}>
				Reassign Mentor
				</button> )
			}]
		}
		return(
			<div className = "col">
				<ReactTable
				defaultPageSize={10}
				data = {data}
				columns = {columns}
				/>
			</div>
		)
	};
		
}

export default DashboardAllMentors;