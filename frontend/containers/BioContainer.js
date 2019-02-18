import React from "react";
import { connect } from "react-redux";
import BioItem from "../components/BioItem.js";

class BioContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.bioInfo.map(item => (
          <div key={item.title}>
            <BioItem title={item.title} description={item.bio} />
          </div>
        ))}
      </div>
    );
  }
}

export default BioContainer;
