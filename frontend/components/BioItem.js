import React from "react";
import { connect } from "react-redux";

class BioItem extends React.Component {
  constructor(props) {
    super(props);
    this.fields = {
      title: props.title,
      description: props.description
    };
  }

  render() {
    return (
      <div>
        <h4 style={{ marginLeft: 3 }}>{this.fields.title}</h4>
        <p style={{ marginLeft: 5 }}>{this.fields.description}</p>

        {/* <h4 contentEditable="true">{this.fields.title}</h4>
                <p contentEditable="true">{this.fields.description}</p> */}
      </div>
    );
  }
}

// const mapStateToProps = state => {
// 	return {
//         bioInfo: state.bioInfo
//     };
// }

export default BioItem; //connect(mapStateToProps)(BioItem);
