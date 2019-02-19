import React from 'react';


class BioItem extends React.Component {
    constructor(props) {
		super(props);
		this.fields = {
           title: props.title,
           description: props.description
        }
    }
    
    render() {
        return (
            <div>
                <h4 contentEditable="true">{this.fields.title}</h4>
                <p contentEditable="true">{this.fields.description}</p>
            </div>
        )
    }
};

export default (BioItem);