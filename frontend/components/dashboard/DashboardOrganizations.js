import React from 'react';
import ReactTable from 'react-table';

class DashboardOrganizations extends React.Component{

	onClickOrganization (e) {
		this.setState({currentOrganization: e.target.value})
	}

	render() {
		var data = []
		var columns = []
		if (this.props.organizations != null) {
			data = this.props.organizations;
			var self = this;
			columns = [{
				id: "name",
				Header: "Organization Name",
				accessor: org => org[0].name, 
				Cell: ({original}) => ( <button onClick={function() {self.props.currentOrganization(original)}}>{original[0].name}</button> )
			}] 
		}

		return(
			<div className = "container">
				<ReactTable
				defaultPageSize={10}
				data = {data}
				columns = {columns}
				/>
			</div>
	)};

}


export default DashboardOrganizations;
