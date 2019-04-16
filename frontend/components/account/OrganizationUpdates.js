import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";

import './../../assets/stylesheets/organization_styles.css';

class OrganizationUpdates extends React.Component{

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.showUpdates = this.showUpdates.bind(this);

    this.state = {
      show: false,
      updates: [],
      value: this.props.waiversNeeded + ' members still need to upload participation waivers!'
    };
  }

  componentWillMount() {
    axios
      .get("/api/updates/")
      .then(({ data }) => {
        console.log("Reached then")
        // console.log(data);
        this.setState({updates: data});
      })
      .catch(error => {
        // console.log(error);
        console.log(this.state.updates);
        console.log("No such update found");
      });

      // this.setState({ updates: [{description: "This is an example update.", organization: "Troop 1234"}]});

  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  showUpdates() {
    var ret = [];
    for(var i = 0; i < this.state.updates.length; i++) {
      ret.push(<p>{this.state.updates[i].description}</p>);
    }
    return ret;
  }

   render() {
       return (
        <div>
            <h2 className="text-center">Updates</h2>
            <div className = "updates-scrollable text-danger">
              {this.showUpdates()}
            </div>
            <p className="text-center"><a  className="btn btn-primary text-white" onClick={this.handleShow} role="button">View All Updates &raquo;</a></p>

            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Updates</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.showUpdates()}
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
