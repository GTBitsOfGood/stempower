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
        let query = '?name=' + this.props.name;
        let src = '';
        let self = this;
        axios.get('api/upload' + query)
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

