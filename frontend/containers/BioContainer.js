import React from "react";
import { connect } from "react-redux";
import BioItem from "../components/BioItem.js";

class BioContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.bioInfo.map(item => (
          <div key={item.title}>
            <BioItem
              bio={item}
              isEditing={this.props.isEditing}
              profile={this.props.profile}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default BioContainer;
