import React, { Component } from 'react';
import GoogleMap from '../GoogleMap'

class ExploreMap extends Component {

  render() {
    return (
        <div>
          <GoogleMap google={this.props.google}/>
        </div>
    );
  }

}

export default ExploreMap;

//if actually only using 1 map for whole app, and just adjusting the state of the
//rendered markers, then just refactor so that <GoogleMap google={this.props.google}/>
// is on each individual page render instead
