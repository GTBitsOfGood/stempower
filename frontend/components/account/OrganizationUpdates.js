import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './../../assets/stylesheets/organization_styles.css';

class OrganizationUpdates extends React.Component{

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      value: this.props.waiversNeeded + ' members still need to upload participation waivers!'
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
            <h2 className="text-center">Updates</h2>
            <div className = "updates-scrollable text-danger">
              <p>Make sure you complete all your forms </p>
              <p>Troop 174 still needs to register </p>
              <p>Example Text Right Here </p>
            </div>
            <p className="text-center"><a  className="btn btn-primary text-white" onClick={this.handleShow} role="button">View All Updates &raquo;</a></p>

            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Updates</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Make sure you complete all your forms</p>
              <p>Troop 174 still needs to register</p>
              <p>Example Text Right Here</p>
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


export default OrganizationUpdates;