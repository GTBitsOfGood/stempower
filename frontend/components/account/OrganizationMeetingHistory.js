import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './../../assets/stylesheets/organization_styles.css';

class OrganizationMeetingHistory extends React.Component{

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
       var history = this.props.meetingHistory.map(function(date) {
           return <a href='#'><li key={date}>{date}</li></a>
       });
       return (
        <div>
          <div>
              <h2>Meeting History</h2>
              <ul>{history}</ul>
              <p><a  className="btn btn-primary text-white" onClick={this.handleShow} role="button">View All Meetings &raquo;</a></p>
          </div>

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


export default OrganizationMeetingHistory;
