import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ProfileCard from './../../containers/ProfileCard'

import './../../assets/stylesheets/organization_styles.scss';

class OrganizationMentors extends React.Component{

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOne = this.handleOne.bind(this);
    this.handleTwo = this.handleTwo.bind(this);

    this.state = {
      show: false,
      id: 0,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleOne() {
    this.setState({ show: true, id: this.props.mentors[1].id });
  }

  handleTwo() {
    this.setState({ show: true, id: this.props.mentors[0].id });
  }

   render() {
       return (
        <div>
            <h2 className="text-center">Mentors</h2>
            <div>  
              <span onClick={this.handleOne}>
                {this.props.mentors[1] != undefined ? (
                  <ProfileCard condensed={true} id={this.props.mentors[1].id} isEditable={false} />
                ) : (
                  console.log("undefined")
                )}
              </span>
              <span onClick={this.handleTwo}>
                {this.props.mentors[0] != undefined ? (
                  <ProfileCard condensed={true} id={this.props.mentors[0].id} isEditable={false} />
                ) : (
                  console.log("undefined")
                )}
              </span>
            </div>
            <br></br>
            <p className="text-center"><a  className="btn btn-primary text-white" onClick={this.handleShow} role="button">Contact Your Mentors &raquo;</a></p>

            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Mentor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {this.props.mentors[1] != undefined && this.props.mentors[0] != undefined ? (
                  <ProfileCard id={this.state.id} isEditable={false} />
                ) : (
                  console.log("undefined")
                )}
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>
                Close
              </Button>
              <Button onClick={this.handleClose}>
                Contact
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
   )};
}


export default OrganizationMentors;