import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewMap from '../Umbrella/NewMap'


class ExploreMap extends Component {

  render() {
    return (
        <div id='exploreContainer'>
          <NewMap />
        </div>
    );
  }

}

export default ExploreMap;

//if actually only using 1 map for whole app, and just adjusting the state of the
//rendered markers, then just refactor so that <GoogleMap google={this.props.google}/>
// is on each individual page render instead
