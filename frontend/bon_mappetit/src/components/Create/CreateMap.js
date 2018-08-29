import React, { Component } from 'react';
import GoogleMap from '../GoogleMap'

class CreateMap extends Component {

  render() {
    return (
        <div id='mapContainer'>
          <GoogleMap google={this.props.google}/>
        </div>
    );
  }

}

export default CreateMap;
