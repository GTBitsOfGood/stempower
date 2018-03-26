import axios from 'axios';
import React from 'react';

export default class ImageDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {imgSrc: ''};
    }
    renderPic() {
        let query = '?name=' + this.props.name;
        let src = '';
        let self = this;
        axios.get('api/upload' + query)
            .then(response => this.setState({imgSrc: "data:image/jpeg;base64," + response.data}))
            .catch(error => console.log(error));
    }
    render() {
        //console.log(this.state);
        //this.renderPic();
        return (
            <div className="profile-picture">
                <img src = {this.state.imgSrc}/>
            </div>
        );
    }
}

