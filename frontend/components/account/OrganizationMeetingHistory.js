import React from 'react';
import { Modal, Button } from 'react-bootstrap';
<<<<<<< HEAD
import './../../assets/stylesheets/organization_styles.scss';
=======
import InlineEdit from 'react-edit-inline';
import axios from "axios";
import MeetingCard from './../../containers/MeetingCard'

import './../../assets/stylesheets/organization_styles.css';
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba

class OrganizationMeetingHistory extends React.Component{

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
<<<<<<< HEAD

    this.state = {
      show: false,
    };
  }

=======
    this.getInlineElement = this.getInlineElement.bind(this);

    this.state = {
      show: false,
      meetings: [],
    };
  }

  componentWillMount() {
    axios
      .get("/api/mentors/")
      .then(({ data }) => {
        this.setState({ meetings: data});
      })
      .catch(error => {
        console.log("No such meeting found");
      });
  }

>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

<<<<<<< HEAD
=======
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

>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba
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
<<<<<<< HEAD

=======
          
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>All Meetings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
<<<<<<< HEAD
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
=======
              <MeetingCard condensed={true} id={123333} isEditable={true}/>
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba
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