import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";
import './../../assets/stylesheets/organization_styles.scss';

class OrganizationDocuments extends React.Component{

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);

    this.state = {
      show: false,
      file: null
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  onFileChange(event) {
    this.setState({file: event.target.files[0]});
  }
  
  onFileUpload(event) {
    event.preventDefault();
    
    //submit whatever is in the state
    if (this.state.file === null) {
      alert("Please upload a file");
    }
    console.log('submiting ' + this.state.file);
    
    const formData = new FormData();
    formData.append('file', this.state.file);

    axios
    .post("api/documents/", formData, { headers: {'content-type': 'multipart/form-data'}})
    .then(res => {
      console.log(res);
    })
    .catch(e => console.log(e.response.data));

    document.getElementById("documentForm").reset();
    this.setState({file: null})
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


            <form id = "documentForm" onSubmit={this.onFileUpload}>
              <h3>Upload Documents</h3>
              <input type="file" onChange={this.onFileChange} />
              <button type="submit">Upload Document</button>
            </form>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>
                Close
              </Button>
              {/* <Button onClick={this.handleClose}>
                Upload Document
              </Button> */}
            </Modal.Footer>
          </Modal>

        </div>
   )};

}


export default OrganizationDocuments;