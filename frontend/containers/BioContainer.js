import React from 'react';
import { connect } from 'react-redux';
import BioItem from '../components/BioItem.js'


class BioContainer extends React.Component {
    constructor(props) {
        super(props);
        this.fields = {
            bioInfo: props.bioInfo
        }
    }

    render() {
        return (
            <div>
                {this.fields.bioInfo.map((item) =>
                    <div key={item.title}>
                        <BioItem title={item.title} description={item.description}></BioItem>
                    </div>
                )}
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        bioInfo: state.bioInfo
    };
}

export default connect(mapStateToProps)(BioContainer);