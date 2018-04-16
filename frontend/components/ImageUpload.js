//This component must have a prop that is the mentor's unique ID, and one that is
//true or false depending on whether the profile picture can be changed.

import axios from 'axios';
import React from 'react';
import '../../frontend/assets/stylesheets/profilePic.css';

export default class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: '', uploaded: 'false'};
    }
    handleSubmit(e) {
        e.preventDefault();
        let file = this.state.file;
        let formData = new FormData();
        formData.append('file', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        let mentorId = this.props.id;
        let metadata = {
            id: mentorId,
            size: file.size,
            type: file.type
        };
        this.setState({imagePreviewUrl:''});
        formData.append('metadata', JSON.stringify(metadata));
        axios.post('api/files/profilePicture', formData, config)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }
    handleImageChange(e) {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = (e) => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file);
    }
    render() {
        this.props.loggedIn;
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} id="preview"/>);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return (
            <div className="previewComponent">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input name="profile" id="fileInput" className="fileInput" type="file" onChange={(e)=>this.handleImageChange(e)} />
                    <button className="submitButton" id="submit" type="submit" onClick={(e) => this.handleSubmit(e)}>Upload Image</button>
                </form>
                <div id="prev" className="imgPreview">{$imagePreview}</div>
            </div>
        );
    }
}

