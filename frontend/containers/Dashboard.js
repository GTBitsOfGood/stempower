import React from 'react';
import axios from 'axios';
import 'react-table/react-table.css';

import DashboardTabs from "./../components/dashboard/DashboardTabs";
import DashboardOrganizations from "./../components/dashboard/DashboardOrganizations";
import DashboardMembers from "./../components/dashboard/DashboardMembers";
import DashboardMentors from "./../components/dashboard/DashboardMentors";
import DashboardMentorDocuments from "./../components/dashboard/DashboardMentorDocuments";
import DashboardMemberDocuments from "./../components/dashboard/DashboardMemberDocuments";
import DashboardAllMentors from "./../components/dashboard/DashboardAllMentors";
import DashboardTests from "./../components/dashboard/DashboardTests";
import UploadDocument from "./../components/UploadDocument";

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {organizations: null, currentOrganization: null, allMentors: null, currentTab: "organizationView"}
    }

    //Build a plcaeholder for many things, for the things other people would have done. 
    //Things dashboard needs to do:

    //Possibly include dropwdown for choosing organization
    //https://www.w3schools.com/howto/howto_js_filter_dropdown.asp
    //https://www.w3schools.com/bootstrap/bootstrap_dropdowns.asp

    //Need to be able to view all leaders in an organization
    //View and do updates for organizations
    //Delete mentor from existance
    //Build system for adding and deleting documents types  
    //Change calendar link

//    //Need to be able to delete organization as well
//    //If Admin logged in, admin should be able to turn a mentor into an admin, have an extra column where it says what the current role of the mentor is
//    //,wether they are a mentor or an admin called status, then have a button next to that mentor that changes that mentor from admin to mentor. 
//    //View all organizaitons and mentors
//    //Delete any account
    //Set a organization or mentor as active or inactive
    //Export all organizations/mentors/members to google sheets or excel
//    //For organzations, must be able to view all members as well
//    //Should be able to assign/reassign a mentor to an organzation
//    //Should be able to see for every organization a list of documents that have been uploaded
    //Should be able to see who has paid, organization or memeber
//    //Should be able to add or delete a member(just a name)

    componentDidMount() {
        axios.get('/api/organizations').then((organization) => {
            let organizationsList = [];
            for (let x = 0; x < organization.data.length; x++) {
                let currentOrg = organization.data[x];
                let mentors = [];
                for (let i = 0; i < currentOrg.mentors.length; i++) {
                    let mentorStri = '/api/mentors/' + currentOrg.mentors[i];
                    let documentStri = '/api/documents/documentTests/mentors/' + currentOrg.mentors[i];
                    axios.all([axios.get(mentorStri), axios.get(documentStri)]).then(axios.spread((mentorInfo, documentInfo) => {
                        for (let x = 0; x < documentInfo.data.length; x++) {
                            mentorInfo.data[documentInfo.data[x].fileType] = documentInfo.data[x];
                        }
                        mentors.push(mentorInfo.data)
                    }));
                }

                currentOrg.mentors = mentors

                let memberStri = '/api/documents/documentTests/organizations/' + currentOrg._id;
                axios.get(memberStri).then((memberDocuments) => {
                    for (let i = 0; i < memberDocuments.data.length; i++) {
                        let currentMember = currentOrg.members.find((element) => element.member == memberDocuments.data[i].member);
                        if (currentMember) {
                            currentMember[memberDocuments.data[i].fileType] = memberDocuments.data[i]
                        }
                    }
                })

                organizationsList.push(currentOrg);
            }
            this.setState({organizations: organizationsList});
            this.setState({currentOrganization: organizationsList[0]});
        });
        axios.get('/api/mentors').then((mentors) => {
            this.setState({allMentors: mentors.data});
        })
    }

    render() {
        if (this.state.currentTab == "organizationView") {
            return(
                <div className = "container-fluid">
                    <DashboardTests/>
                    <DashboardTabs currentTab = {tab => this.setState({currentTab: tab})}/>
                    <div className = "row">
                        <DashboardOrganizations states={this.state} organizations={orgs => this.setState({organizations: orgs})} 
                                                curOrganization={org => this.setState({currentOrganization: org})} allMentors={mentors =>this.setState({allMentors: mentors})}/>    
                        <DashboardMentors currentOrganization = {this.state.currentOrganization} mentors = {this.state.allMentors} allMentors={mentors => this.setState({allMentors: mentors})}/>
                        <DashboardMembers currentOrganization = {this.state.currentOrganization}/>
                    </div> 
                </div>
            )
        } else if (this.state.currentTab == "documentView") {
            return(
                <div className = "container-fluid">
                    <DashboardTests/>
                    <DashboardTabs currentTab = {tab => this.setState({currentTab: tab})}/>
                    <div className = "row">
                        <DashboardOrganizations states={this.state} organizations={orgs => this.setState({organizations:org})} 
                                                curOrganization={org => this.setState({currentOrganization: org})} allMentors={mentors => this.setState({allMentors: mentors})}/> 
                        <DashboardMentorDocuments currentOrganization = {this.state.currentOrganization} mentors = {this.state.allMentors}/>
                        <DashboardMemberDocuments currentOrganization = {this.state.currentOrganization}/>
                    </div>
                </div>
            )
        } else if (this.state.currentTab == "mentorView") {
            return(
                <div className = "container-fluid">
                    <DashboardTests/>
                    <DashboardTabs currentTab = {tab => this.setState({currentTab: tab})}/>
                    <div className = "row">
                        <DashboardAllMentors mentors={this.state.allMentors} organizations={this.state.organizations} currentOrganization={this.state.currentOrganization}
                                             allOrgs={orgs => this.setState({organizations: orgs})} curOrganization={org => this.setState({currentOrganization: org})} allMentors={mentors => this.setState({allMentors: mentors})}/>
                    </div>
                </div>
            )
        }
    }
}

export default Dashboard;