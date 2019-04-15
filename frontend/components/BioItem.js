import React from 'react';


class BioItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    if (!this.props.isEditing) return this.normalView();
    else return this.editView();
  }

  handleChange() {
    var profile = this.props.profile;

    var temp = profile.state.mentor;
    temp.bios.map(item => {
      if (item._id == this.props.bio._id) {
        item.title = this.refs.title.value;
        item.bio = this.refs.bio.value;
      }
    });
    profile.setState({ mentor: temp });
  }

  normalView() {
    return (
      <div>
        <h4 style={{ marginLeft: 3 }}>{this.props.bio.title}</h4>
        <p style={{ marginLeft: 5 }}>{this.props.bio.bio}</p>

        {/* <h4 contentEditable="true">{this.fields.title}</h4>
                <p contentEditable="true">{this.fields.description}</p> */}
      </div>
    );
  }

  editView() {
    return (
      <div>
        <h4 style={{ marginLeft: 3 }}>
          <textarea
            ref="title"
            defaultValue={this.props.bio.title}
            onChange={this.handleChange}
          />
        </h4>
        <p style={{ marginLeft: 5 }}>
          <textarea
            ref="bio"
            defaultValue={this.props.bio.bio}
            onChange={this.handleChange}
          />
        </p>

        {/* <h4 contentEditable="true">{this.fields.title}</h4>
                <p contentEditable="true">{this.fields.description}</p> */}
      </div>
    );
  }
}

export default (BioItem);
