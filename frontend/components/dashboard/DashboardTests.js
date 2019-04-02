import React from 'react';
import axios from 'axios';

class DashboardTests extends React.Component{

	makeOrganizations() {
		var newOrg = {
			name: "someOrgName",
			leaders: [{"leader": "leader6"}, {"leader": "dueader2"}],
			address: "penn ave",
			members: [{"member": "member1"}, {"member": "Member2"}],
			mentors: ["5c9a9ccac896b9282cc1ab53"]
		}
		axios.post('/api/organizations', newOrg);
	}


	makeDocuments() {
		var newDocument = {
			fileName: "randomMemberFile",
			fileType: "waiver",
			orgId: "5c7ef65774956b27e0bd8008",
			member: "fakeMember1"
			//mentorId: "5bb3c0d3da2944b054ca39bf"
		}
		axios.post('/api/documents/documentTest', newDocument);
	}

	makeMentors() {
		var newMentor = {
			firstName: "someName",
    		lastName: "lastName",
    		email: "randomEmail",
    		phoneNumber: "91231231",
    		university: "Georgia Tech",
    		organization: "BitsOfGood"
		}
		axios.post('/api/mentors', newMentor);
	}

	render() {
		return(
			<div>
				<button onClick = {this.makeOrganizations}>Make dummy organization</button>
				<button onClick = {this.makeDocuments}>Make dummy document</button>
				<button onClick = {this.makeMentors}>Make dummy mentor</button>
			</div>
	)};

}


export default DashboardTests;