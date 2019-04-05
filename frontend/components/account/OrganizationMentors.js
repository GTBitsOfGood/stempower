import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ProfileCard from './../../containers/ProfileCard'
<<<<<<< HEAD

import './../../assets/stylesheets/organization_styles.scss';
=======
import ProfilePanel from './../../containers/ProfilePanel'
import Profile from './../../containers/Profile'

import './../../assets/stylesheets/organization_styles.css';
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba

class OrganizationMentors extends React.Component{

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
<<<<<<< HEAD
    this.handleOne = this.handleOne.bind(this);
    this.handleTwo = this.handleTwo.bind(this);

    this.state = {
      show: false,
      id: 0,
=======
    this.handleCard = this.handleCard.bind(this);
    this.displayMentors = this.displayMentors.bind(this);

    this.state = {
      show: false,
      id: [],
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

<<<<<<< HEAD
  handleOne() {
    this.setState({ show: true, id: this.props.mentors[1].id });
  }

  handleTwo() {
    this.setState({ show: true, id: this.props.mentors[0].id });
=======
  handleCard(index) {
    console.log(index);
    var id;
    id = this.props.mentors[index] != undefined ? this.props.mentors[index].id : this.props.mentors[0].id;
    this.setState({ show: true, id: id});
  }

  displayMentors() {
    var ret = [];
    for(var i = 0; i < this.props.mentors.length; i++) {
       ret.push(<span key={i} onClick={() => this.handleCard(i)}>
                {this.props.mentors[i] != undefined ? (
                  <ProfileCard condensed={true} id={this.props.mentors[i].id} isEditable={false} />
                ) : (
                  console.log("undefined")
                )}
                </span>)
    }
    return ret;
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba
  }

   render() {
       return (
        <div>
            <h2 className="text-center">Mentors</h2>
<<<<<<< HEAD
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
=======
            <div className="scrollable">  
              {this.displayMentors()}
            </div>
            <br></br>
            <p className="text-center"><a className="btn btn-primary text-white" onClick={this.handleShow} role="button">Contact Your Mentors &raquo;</a></p>
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba

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


<<<<<<< HEAD
export default OrganizationMentors;
=======
export default OrganizationMentors;
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba
