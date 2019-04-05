import React from 'react';
import { Modal, Button } from 'react-bootstrap';
<<<<<<< HEAD
import './../../assets/stylesheets/organization_styles.scss';
=======
import './../../assets/stylesheets/organization_styles.css';
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba

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
<<<<<<< HEAD
            <h2 className="text-center">Updates!</h2>
            <p> </p>
            <textarea className="text-danger" cols='25' rows='4' value={this.state.value}/>
            <p className="text-center"><a  className="btn btn-primary text-white" onClick={this.handleShow} role="button">View Updates &raquo;</a></p>
=======
            <h2 className="text-center">Updates</h2>
            <p> </p>
            <p className="text-center"><a  className="btn btn-primary text-white" onClick={this.handleShow} role="button">View All Updates &raquo;</a></p>
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba

            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Updates</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h2>Important:</h2>
              <p>{this.state.value}</p>
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