<<<<<<< HEAD
import React from 'react';
import BioItem from '../components/BioItem.js'

=======
import React from "react";
import { connect } from "react-redux";
import BioItem from "../components/BioItem.js";
>>>>>>> a0b1ec6984a034f96e271cdfbdf7b5b0dd52daba

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
