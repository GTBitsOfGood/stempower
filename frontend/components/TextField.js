import React from 'react';

class TextField extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            answer:""
        };
        this.updateAnswer = this.updateAnswer.bind(this);
    }

    updateAnswer(e) {
        this.setState(Object.assign({}, this.state, {
            answer: e.target.value
        }))
    }

    render() {
        return (
            <div>
                <div className="foreground-color">{this.props.question}</div>
                <textarea className="ta-question"
                          style={{fontSize:"14px"}} 
                          onChange={this.updateAnswer}/>
            </div>
        )
    }
}

export default TextField;