//This component must have a prop that is the mentor's unique ID

import axios from 'axios';
import React from 'react';
import '../../frontend/assets/stylesheets/profilePic.css';
import ImageUpload from './ImageUpload.js';

export default class ImageDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {imgSrc: ''};
    }
    //search quey is name, or the ID of the user. For now it is dummy field
    renderPic() {
        let mentorId = this.props.id;
        let src = '';
        axios.get('api/files/profilePicture/' + mentorId)
            .then(response => this.setState({imgSrc: "data:image/jpeg;base64," + response.data}))
            .catch(error => console.log(error));
    }
    changePicture() {
        document.getElementById("overlay").style.display = "block";
        this.renderPic();
    }
    off() {
        document.getElementById("overlay").style.display = "none";
    }
    render() {
        //console.log(this.state);
        //this.renderPic();
        return (
            <div>
                <div id="overlay" >
                <span id='close' onClick={this.off}>x</span>
                    <ImageUpload />
                </div>
                <div className="profile-picture">
                    <img className="image" src = {this.state.imgSrc}/>
                    <div className="middle">
                        <button className="reset" onClick={(e) => this.changePicture(e)}>Change picture</button>
                    </div>
                </div>
            </div>
        );
    }
}

