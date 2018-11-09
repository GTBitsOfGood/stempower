import React from 'react';
import { connect } from 'react-redux';
import BioItem from '../components/BioItem.js'


class BioContainer extends React.Component {

    render() {
        return (
            <div>
                {this.props.bioInfo.map((item) =>
                    <div key={item.title}>
                        <BioItem title={item.title} description={item.bio} id={item.id}></BioItem>
                    </div>
                )}

                <BioItem style={newBioStyle} title="new title" description="new desc"></BioItem>
            </div>
        )
    }
};

const newBioStyle = {
    color: 'blue',
};

export default BioContainer;