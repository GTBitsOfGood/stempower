import React from 'react';
import { Modal, Button } from 'react-bootstrap';
<<<<<<< HEAD
import './../../assets/stylesheets/organization_styles.scss';
=======
import './../../assets/stylesheets/organization_styles.css';
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba

class OrganizationPaypal extends React.Component{

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
            <h2 className="text-center">Payment</h2>
            <p> 
            </p>
            <p><img src="https://www.paypalobjects.com/webstatic/mktg/logo-center/PP_Acceptance_Marks_for_LogoCenter_266x142.png" width='170' /></p>
            <p className="text-center"><a  className="btn btn-primary text-white" onClick={this.handleShow} role="button">Pay With PayPal &raquo;</a></p>

            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Paypal Integration</Modal.Title>
            </Modal.Header>
            <Modal.Body>Paypal Integration will be implemented soon!</Modal.Body>
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


<<<<<<< HEAD
export default OrganizationPaypal;
=======
export default OrganizationPaypal;
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba
