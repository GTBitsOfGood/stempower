import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ProfileCard from './../../containers/ProfileCard'
import ProfilePanel from './../../containers/ProfilePanel'
import Profile from './../../containers/Profile'

import './../../assets/stylesheets/organization_styles.css';

class OrganizationMentors extends React.Component{

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCard = this.handleCard.bind(this);
    this.displayMentors = this.displayMentors.bind(this);

    this.state = {
      show: false,
      id: [],
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleCard(index) {
    var id;
    id = this.props.mentors[index] != undefined ? this.props.mentors[index].id : this.props.mentors[0].id;
    this.setState({ show: true, id: id});
  }

  displayMentors() {
    var ret = [];
    for(var i = 0; i < this.props.mentors.length; i++) {
      const index = i
       ret.push(<span key={i} onClick={() => this.handleCard(index)}>
                {this.props.mentors[index] != undefined ? (
                  <ProfileCard condensed={true} id={this.props.mentors[index].id} isEditable={false} />
                ) : (
                  console.log("undefined")
                )}
                </span>)
    }
    return ret;
  }

   render() {
       return (
        <div>
            <h2 className="text-center">Mentors</h2>
            <div className="scrollable">  
              {this.displayMentors()}
            </div>
            <p className="text-center"><a className="btn btn-primary text-white" onClick={this.handleShow} role="button">Contact Your Mentors &raquo;</a></p>
            
            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Mentors</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {this.props.mentors[1] != undefined && this.props.mentors[0] != undefined ? (
                  <ProfileCard id={this.state.id} isEditable={this.props.mentorId == this.state.id} />
                ) : (
                  console.log("undefined")
                )}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
   )};
}


export default OrganizationMentors;
