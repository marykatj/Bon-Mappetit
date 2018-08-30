import React, { Component } from 'react';
import GoogleMap from '../GoogleMap'
import Marker from '../Marker'

const pos = {lat: 37.759703, lng: -122.428093}

class UserMap extends Component {

  render() {
    return (
        <div id='mapContainer'>
          <GoogleMap google={this.props.google} position={pos}/>
          <Marker />
          <Marker position={pos} />
        </div>
    );
  }

}

export default UserMap;
