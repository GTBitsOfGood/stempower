import React from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import "./../../assets/stylesheets/organization_styles.scss";

class OrganizationDocuments extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);

    this.state = {
      show: false,
      file: null,
      documents: [],
      url_dict: {}
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    console.log("handling show");
    axios
      .get("api/documents/get_documents")
      .then(res => {
        console.log("Documents");
        console.log(res.data);
        var data = res.data;
        var documents = [];
        for (var i = 0; i < data.length; i++) {
          var d = data[i];
          documents.push({ name: d.fileName, id: d._id, type: d.documentType });
          this.getAwsURL(d._id);
        }
        this.setState({ documents: documents });
      })
      .catch(e => console.log(e));

      this.setState({ show: true });
  }

  getAwsURL(id) {
    axios
      .get("api/documents/get_doc_by_id/" + id)
      .then(res => {
        var temp = this.state.url_dict;
        temp[id] = res.data;
        this.setState({ url_dict: temp});
      })
      .catch(e => {
        console.log("couldn't find file on AWS server " + e);
        var temp = this.state.url_dict;
        temp[id] = "/404";
        this.setState({ url_dict: temp});
      });
  }

  onFileChange(event) {
    this.setState({ file: event.target.files[0] });
  }

  onFileUpload(event) {
    console.log("Hit event")
    event.preventDefault();

    //submit whatever is in the state
    if (this.state.file === null) {
      alert("Please upload a file");
    }
    console.log("submiting " + this.state.file);

    const formData = new FormData();
    formData.append("file", this.state.file);

    var documentType = document
      .getElementById("documentForm")
      .elements.namedItem("documentType").value;
    formData.append("documentType", documentType);

    axios
      .post("api/documents/", formData, {
        headers: { "content-type": "multipart/form-data" }
      })
      .then(res => {
        console.log("Response");
        console.log(res);
        this.handleShow();
      })
      .catch(e => console.log(e.response.data));

    document.getElementById("documentForm").reset();
    this.setState({ file: null });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Documents</h2>

        <ul className="text-left">
          <a href="http://www.orimi.com/pdf-test.pdf" target="_blank">
            <li>Organization Feedback</li>
          </a>
          <a href="http://www.orimi.com/pdf-test.pdf" target="_blank">
            <li>Member Feedback</li>
          </a>
          <a href="http://www.orimi.com/pdf-test.pdf" target="_blank">
            <li>Waiver</li>
          </a>
          <a href="http://www.orimi.com/pdf-test.pdf" target="_blank">
            <li>Organization Application</li>
          </a>
        </ul>
        <p className="text-center">
          <a
            className="btn btn-primary text-white"
            onClick={this.handleShow}
            role="button"
          >
            View Documents &raquo;
          </a>
        </p>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>All Documents</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Your Documents</h4>
            <div>
              <table>
                <tbody>
                  <tr>
                    <th>File Name</th>
                    <th>File Type</th>
                  </tr>
                  {this.state.documents.map((item, index) => (
                    <tr key={index}>
                      <td>
                        {" "}
                        <a href={this.state.url_dict[item.id]}>{item.name}</a>
                      </td>
                      <td>{item.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <br />
            </div>
            <form id="documentForm" onSubmit={this.onFileUpload}>
              <h3>Upload Documents</h3>
              <input type="file" onChange={this.onFileChange} />
              <button type="submit">Upload Document</button>
            </form>
            <select name="documentType" form="documentForm">
              <option value="org_feedback">Organization Feedback</option>
              <option value="member_feedback">Member Feedback</option>
              <option value="member_waiver">Waiver</option>
              <option value="org_app">Organizatoin Application</option>
            </select>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default OrganizationDocuments;
