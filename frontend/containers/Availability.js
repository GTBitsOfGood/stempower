import React from 'react';

class Availability extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  One of three columns
                </div>
                <div className="col-sm">
                  One of three columns
                </div>
                <div className="col-sm">
                  One of three columns
                </div>
              </div>
            </div>
        )
    }
}

export default Availability;