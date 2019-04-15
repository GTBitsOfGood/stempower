import React from "react";
import ProfilePanel from "./ProfilePanel.js";
import axios from "axios";
import InlineEdit from 'react-edit-inline';

class MeetingCard extends React.Component {
  constructor(props) {
    super(props);
    this.getInlineElement = this.getInlineElement.bind(this);

    this.state = {
      width: "",
      float: "",
      isEditing: false,
      meetings: [],
    };
  }

  componentWillMount() {
    const id = this.props.id;
     axios
      .get("/api/meetings/")
      .then(({ data }) => {
        this.setState({ meetings: data});
      })
      .catch(error => {
        console.log("No such person found");
      });

        this.setState({ meetings: [{date: "11/13/1998", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}, 
                                    {date: "11/13/2001", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
                                    {date: "11/13/2006", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]});
  }

  newSave() {
    axios
      .put("/api/meetings/" + this.props.id, this.state.mentor)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  toggleView() {
    if (!this.state.isEditing) return this.editView();
    else return this.saveView();
  }

  editView() {
    if (this.props.isEditable)
      return (
        <button
          onClick={() => {
            this.setState({ isEditing: true });
          }}
        >
          Edit
        </button>
      );
    else return;
  }

  saveView() {
    return (
      <button
        onClick={() => {
          this.newSave();
          this.setState({ isEditing: false });
        }}
      >
        Save
      </button>
    );
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
    return (
      <div style={{ marginBottom: "20px", marginTop: "20px" }}>
        <div
          id="user-profile"
          style={{
            width: this.state.width,
            float: this.state.float,
          }}
        >
          {this.getInlineElement(0)}
          {this.getInlineElement(1)}
          {this.getInlineElement(2)}
        </div>
      </div>
    );
  }
}

export default MeetingCard;