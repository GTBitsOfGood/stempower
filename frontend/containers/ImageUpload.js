import axios from 'axios';
import React from 'react';

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
        //later name will be changed to the specific id/name of the user. Right now it is dummy data
        let metadata = {
            name: "sophia-pic",
            size: file.size,
            type: file.type,
        };
        formData.append('metadata', JSON.stringify(metadata));
        axios.post('api/upload',formData, config)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }
    handleImageChange(e) {
        //e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        var img = document.createElement("img");
        reader.onloadend = (e) => {
             img.src = e.target.result;

            var canvas = document.createElement("canvas");
            //var canvas = $("<canvas>", {"id":"testing"})[0];
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);

            var MAX_WIDTH = 400;
            var MAX_HEIGHT = 400;
            var width = img.width;
            var height = img.height;

            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);

            var dataurl = canvas.toDataURL("image/png");
            //console.log("dataurl" + dataurl);
            //file = canvas.mozGetAsFile("sophia-pic");
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file);
    }
    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl}/>);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return (
            <div className="previewComponent">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input name="profile" className="fileInput" type="file" onChange={(e)=>this.handleImageChange(e)} />
                    <button className="submitButton" type="submit" onClick={(e) => this.handleSubmit(e)}>Upload Image</button>
                </form>
                <div className="imgPreview">{$imagePreview}</div>
            </div>
        );
    }
}

