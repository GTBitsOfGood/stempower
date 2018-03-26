import React from 'react';

class FormProgress extends React.Component {
    constructor(props){
        super(props)
        this.state = {};
    }

    render() {
        let display = this.props.step > 0 ? {} : {display: "none"}

        return (
            <div>
                <button style={{float:"right"}} 
                        onClick={this.props.onNext}
                        className="next-btn btn btn-primary">
                            Next
                </button>
                <button id="app-back-button"
                        style={Object.assign({float:"right"},display)}
                        className="btn btn-secondary"
                        onClick={this.props.onBack}>
                    Back
                </button>
                <span style={{float:"left"}}>Step {this.props.step} of 5</span>
            </div>
        )
    }
}

export default FormProgress;