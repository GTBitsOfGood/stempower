import React from 'react';
import BioItem from '../components/BioItem.js'


class BioContainer extends React.Component {

    render() {
        return (
            <div>
                {this.props.bioInfo.map((item) =>
                    <div key={item.title}>
                        <BioItem title={item.title} description={item.bio}></BioItem>
                    </div>
                )}
            </div>
        )
    }
};

export default BioContainer;