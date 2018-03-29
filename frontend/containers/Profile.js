import React from 'react';

class Profile extends React.Component{
    render() {
        return (
              <div className="container">
                  <div className="jumbotron">
                    <div className="profile-header">
                      <div className="profile-picture">
                        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail" />
                      </div>
                      <div className="profile-about">
                        <label className="flex-item profile-name">Jeff Drasher</label>
                        <div className="display-flex flex-item">
                          <div className="flex-item">Georgia Insitute of Technology</div>
                          <div className="flex-item">5th year</div>
                        </div>
                        <div className="flex-item">jeff.drasher@gatech.edu</div>
                        <div className="flex-item">(678) 367 - 7718</div>
                      </div>
                    </div>
                  </div>
    
                  <div className="row marketing">
                    <div className="col-lg-6">
                      <h4>Subheading</h4>
                      <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
    
                      <h4>Subheading</h4>
                      <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>
    
                      <h4>Subheading</h4>
                      <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    </div>
    
                    <div className="col-lg-6">
                      <h4>Subheading</h4>
                      <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
    
                      <h4>Subheading</h4>
                      <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>
    
                      <h4>Subheading</h4>
                      <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    </div>
                  </div>
            </div>
        )
    }  
};

export default Profile;
