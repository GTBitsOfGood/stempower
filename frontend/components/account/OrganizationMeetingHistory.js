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
            <Modal.Header>
              <Modal.Title>All Meetings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>1/1/2018</h4>
              <a>
                On this date, we discussed how to bake more cookies.
                Tiff said that competition is increasing.
              </a>
              <p></p>
              <h4>1/1/2017</h4>
              <a>
                No one showed up to this meeting unfortunately.
                Hopefully they'll show up next year.
              </a>
              <h4>1/1/2018</h4>
              <a>
                This is some example text right here.
                Hope it serves its purpose.
              </a>
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
export default OrganizationMeetingHistory;