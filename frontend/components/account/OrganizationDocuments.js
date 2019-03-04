import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './../../assets/stylesheets/organization_styles.css';

class OrganizationDocuments extends React.Component{

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

   render() {
       return (
        <div>
            <h2 className="text-center">Documents</h2>

            <ul className="text-left">
                <a href='#'><li>Organization Application</li></a>
                <a href='#'><li>Feedback</li></a>
                <a href='#'><li>Waiver</li></a>
                <a href='#'><li>Upload Photos</li></a>
            </ul>
            <p className="text-center"><a  className="btn btn-primary text-white" onClick={this.handleShow} role="button">View Documents &raquo;</a></p>


            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>
                Close
              </Button>
              <Button onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

        </div>
   )};

}


export default OrganizationDocuments;
