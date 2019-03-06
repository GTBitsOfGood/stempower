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
            <Modal.Header>
              <Modal.Title>All Documents</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Organization Application</h4>
              <p><img src="https://meetingtom-meetingtomorrow.netdna-ssl.com/wp-content/uploads/2015/02/TextDocument.png?x37393" width='170' /></p>
              <p></p>
              <h4>Feedback</h4>
              <p><img src="https://meetingtom-meetingtomorrow.netdna-ssl.com/wp-content/uploads/2015/02/TextDocument.png?x37393" width='170' /></p>
              <p></p>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>
                Close
              </Button>
              <Button onClick={this.handleClose}>
                Upload Document
              </Button>
            </Modal.Footer>
          </Modal>

        </div>
   )};

}


export default OrganizationDocuments;