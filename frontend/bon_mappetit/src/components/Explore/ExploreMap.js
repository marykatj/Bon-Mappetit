import React, { Component } from 'react';
import GoogleMap from '../GoogleMap'
import { connect } from 'react-redux';


class ExploreMap extends Component {

  render() {
    return (
        <div id='mapContainer'>
          <GoogleMap google={this.props.google} allPlaces={this.props.allPlaces}/>
        </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    allPlaces: state.allPlaces
  }
}

export default connect(mapStateToProps)(ExploreMap)

//if actually only using 1 map for whole app, and just adjusting the state of the
//rendered markers, then just refactor so that <GoogleMap google={this.props.google}/>
// is on each individual page render instead
