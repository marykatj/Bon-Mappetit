import React, { Component } from 'react';
import NewMap from '../Umbrella/NewMap'

class UserMap extends Component {

  render() {
    return (
        <div id='mapContainer'>
          <NewMap />
        </div>
    );
  }

}

export default UserMap;
