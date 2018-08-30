import React, { Component } from 'react';
import GoogleMap from '../GoogleMap'

class UserMap extends Component {

  render() {
    return (
        <div id='mapContainer'>
          <GoogleMap google={this.props.google} />
        </div>
    );
  }

}

export default UserMap;
