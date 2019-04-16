import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import InlineEdit from 'react-edit-inline';
import axios from "axios";
import MeetingCard from './../../containers/MeetingCard'

import './../../assets/stylesheets/organization_styles.css';

class OrganizationMeetingHistory extends React.Component{

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.getInlineElement = this.getInlineElement.bind(this);

    this.state = {
      show: false,
      meetings: [],
    };
  }

  componentWillMount() {
    axios
      .get("/api/meetings/")
      .then(({ data }) => {
        this.setState({ meetings: data});
      })
      .catch(error => {
        console.log("No such meeting found in root");
      });

      console.log(this.state.meetings);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  getInlineElement(index) {
    return <div>
              <h2>{this.state.meetings[index].date}</h2>
                <InlineEdit
                  activeClassName="editing"
                  text={this.state.meetings[index].description}
                  paramName="message"
                  style={{
                    minWidth: 150,
                    display: 'inline-block',
                    margin: 0,
                    padding: 0,
                    fontSize: 15,
                    outline: 0,
                    border: 33
                  }}
                />
            </div>
  }

   render() {
      // console.log(this.state.meetings);
      var meetingDates = this.state.meetings;
       var history = meetingDates.map(function(meeting) {
           return <li key={meeting.date}>{meeting.date}</li>
       });
       return (
        <div>
          <div>
              <h2>Meeting History</h2>
              <div className="scrollable-box">
                <ul>{history}</ul>
              </div>
              <p><a className="btn btn-primary text-white" onClick={this.handleShow} role="button">View All Meetings &raquo;</a></p>
          </div>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>All Meetings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <MeetingCard condensed={true} id={123333} isEditable={true} meetings={this.state.meetings}/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>
                Save
              </Button>
              <Button onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
   )};
}
export default OrganizationMeetingHistory;