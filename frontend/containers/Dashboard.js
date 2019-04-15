import React from 'react';
import axios from 'axios';
import 'react-table/react-table.css';

import DashboardTabs from "./../components/dashboard/DashboardTabs";
import DashboardMemberType from "./../components/dashboard/DashboardMemberType"
import DashboardOrganizations from "./../components/dashboard/DashboardOrganizations";
import DashboardMembers from "./../components/dashboard/DashboardMembers";
import DashboardMentors from "./../components/dashboard/DashboardMentors";
import DashboardLeaders from "./../components/dashboard/DashboardLeaders";
import DashboardModifyDocumentTypes from "./../components/dashboard/DashboardModifyDocumentTypes";
import DashboardMentorDocuments from "./../components/dashboard/DashboardMentorDocuments";
import DashboardMemberDocuments from "./../components/dashboard/DashboardMemberDocuments";
import DashboardLeaderDocuments from "./../components/dashboard/DashboardLeaderDocuments";
import DashboardAllMentors from "./../components/dashboard/DashboardAllMentors";
import DashboardTests from "./../components/dashboard/DashboardTests";
//import UploadDocument from "./../components/UploadDocument";


class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {organizations: null, currentOrganization: null, allMentors: null, documentTypes: [], currentTab: "organizationView", currentMemberType: "mentor"}
    }

    //Build a plcaeholder for many things, for the things other people would have done. 
    //Things dashboard needs to do:

    //Possibly include dropwdown for choosing organization
    //https://www.w3schools.com/howto/howto_js_filter_dropdown.asp
    //https://www.w3schools.com/bootstrap/bootstrap_dropdowns.asp

//    //Need to be able to view all leaders in an organization
    //View and do updates for organizations
////    //Delete mentor from existance
//    //Build system for adding and deleting documents types  
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
                    axios.get(mentorStri).then((mentor) => {
                        mentor = mentor.data
                        mentor.organization = currentOrg.name
                        axios.get('/api/documents/get_documents_test/' + mentor._id).then((docs) => {
                            docs = docs.data
                            for (let doc in docs) {
                                axios.get('/api/documents/get_doc_by_id/' + docs[doc]._id).then((file) => {
                                    mentor[docs[doc].documentType] = file.data
                                })
                            }
                        })
                        mentors.push(mentor)
                    });
                }

                currentOrg.mentors = mentors;
                for (let member in currentOrg.members) {
                    axios.get('/api/documents/get_documents_test/' + currentOrg.members[member]._id).then((docs) => {
                        docs = docs.data
                        for (let doc in docs) {
                            axios.get('/api/documents/get_doc_by_id/' + docs[doc]._id).then((file) => {
                                currentOrg.members[member][docs[doc].documentType] = file.data
                            })
                        }
                    })
                }

                for (let leader in currentOrg.leaders) {
                    axios.get('/api/documents/get_documents_test/' + currentOrg.leaders[leader]._id).then((docs) => {
                        docs = docs.data
                        for (let doc in docs) {
                            axios.get('/api/documents/get_doc_by_id/' + docs[doc]._id).then((file) => {
                                currentOrg.leaders[leader][docs[doc].documentType] = file.data
                            })
                        }
                    })
                }

                organizationsList.push(currentOrg);
            }
            this.setState({organizations: organizationsList});
            this.setState({currentOrganization: organizationsList[0]});
        });
        axios.get('/api/mentors').then((mentors) => {
            mentors = mentors.data
            for (let mentor in mentors) {
                if (mentors[mentor].organization) {
                    axios.get('/api/organizations/' + mentors[mentor].organization).then((org) => {
                        mentors[mentor].organization = org.data.name
                    })
                }
                axios.get('/api/documents/get_documents_test/' + mentors[mentor]._id).then((docs) => {
                    docs = docs.data
                    for (let doc in docs) {
                        axios.get('/api/documents/get_doc_by_id/' + docs[doc]._id).then((file) => {
                            mentors[mentor][docs[doc].documentType] = file.data
                        })
                    }
                })
            }
            this.setState({allMentors: mentors});
        })
        axios.get('/api/documentTypes').then((documentTypes) => {
            this.setState({documentTypes: documentTypes.data})
        })
    }

    render() {

        if (this.state.currentTab == "organizationView") {
            let table = <DashboardMentors currentOrganization = {this.state.currentOrganization} mentors = {this.state.allMentors} allMentors={mentors => this.setState({allMentors: mentors})}/>
            if (this.state.currentMemberType == "leader") {
                table = <DashboardLeaders currentOrganization = {this.state.currentOrganization}/>
            } else if (this.state.currentMemberType == "member") {
                table = <DashboardMembers currentOrganization = {this.state.currentOrganization}/>
            }
            return(
                <div className = "container-fluid">
                    <DashboardTabs currentTab = {tab => this.setState({currentTab: tab})}/>
                    <DashboardMemberType currentMemberType = {memberType => this.setState({currentMemberType: memberType})}/> 
                    <div className = "row">
                        <DashboardOrganizations states={this.state} organizations={orgs => this.setState({organizations: orgs})} 
                                                curOrganization={org => this.setState({currentOrganization: org})} allMentors={mentors =>this.setState({allMentors: mentors})}/>    
                        {table}
                    </div> 
                </div>
            )
        } else if (this.state.currentTab == "documentView") {
            let table = <DashboardMentorDocuments documentTypes={this.state.documentTypes} currentOrganization = {this.state.currentOrganization} mentors = {this.state.allMentors}/>
            if (this.state.currentMemberType == "leader") {
                table = <DashboardLeaderDocuments documentTypes={this.state.documentTypes} currentOrganization = {this.state.currentOrganization}/>
            } else if (this.state.currentMemberType == "member") {
                table = <DashboardMemberDocuments documentTypes={this.state.documentTypes} currentOrganization = {this.state.currentOrganization}/>
            }
            return(
                <div className = "container-fluid">
                    <DashboardTabs currentTab = {tab => this.setState({currentTab: tab})}/>
                    <DashboardMemberType currentMemberType = {memberType => this.setState({currentMemberType: memberType})}/> 
                    <div className = "row">
                        <DashboardOrganizations states={this.state} organizations={orgs => this.setState({organizations:org})} 
                                                curOrganization={org => this.setState({currentOrganization: org})} allMentors={mentors => this.setState({allMentors: mentors})}/> 
                        {table}                        
                    </div>
                    <DashboardModifyDocumentTypes currentDocumentTypes={this.state.documentTypes} documentTypes={types => this.setState({documentTypes: types})}/>
                </div>
            )
        } else if (this.state.currentTab == "mentorView") {
            return(
                <div className = "container-fluid">
                    <DashboardTabs currentTab = {tab => this.setState({currentTab: tab})}/>
                    <div className = "row">
                        <DashboardAllMentors mentors={this.state.allMentors} organizations={this.state.organizations} currentOrganization={this.state.currentOrganization} documentTypes={this.state.documentTypes}
                                             allOrgs={orgs => this.setState({organizations: orgs})} curOrganization={org => this.setState({currentOrganization: org})} allMentors={mentors => this.setState({allMentors: mentors})}/>
                    </div>
                </div>
            )
        }
    }
}

export default Dashboard;