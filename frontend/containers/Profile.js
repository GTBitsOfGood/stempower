import React from 'react';
import axios from 'axios';

import ImageDisplay from '../components/ImageDisplay.js';
import AboutHeader from '../components/AboutHeader.js'
import BioItem from '../components/BioItem.js'
import BioContainer from './BioContainer'



class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mentor: {
                bios: [],
                firstName: "",
                lastName: "",
                university: ""
            }
        }
    }
    
    //api call for mentor
    componentWillMount() {
      const id = this.props.match.params.id;
        axios.get('/api/mentors/' + id).then(({ data }) => {
          console.log(data);
          this.setState({mentor: data});
      })
    }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="profile-header">
            {/*<ImageDisplay id={1} className="img-responsive" width="200" height="200"/>*/}

            <AboutHeader mentor={this.state.mentor}/>
          </div>
        </div>

        <div className="row marketing">
          <div className="col-lg-6">
            
            <BioContainer bioInfo={this.state.mentor.bios}/>

          </div>

          <div className="col-lg-6">

          </div>
        </div>
      </div>
    )
  }
};

export default Profile;
