import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import MapsMarker from './MapsMarker'

class NewMap extends Component {

  render() {
    return (
      <div style={{ height: '100vh', width: '100%', float: 'left'}} id='map'>
        <GoogleMapReact id='map-container'
          bootstrapURLKeys={{ key: 'AIzaSyD8eyGeIVO1m-lMAwJ21o3qiUPRiuFV_ck' }}
          center={[this.props.coord.lat, this.props.coord.lng]}
          defaultZoom={14} >
          {this.createAllMarkers()}
        </GoogleMapReact>
      </div>
    );
  }

///////////////////////////////////////////////////////////////////////////////

  createAllMarkers = () => {
      return this.props.allPlaces.map( place => <MapsMarker lat={place.lat} lng={place.lng} key={place} place={place} />)
   }
}

///////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {
  return {
    coord: state.coord,
    allMarkers: state.allMarkers,
    userMarkers: state.userMarkers,
    allUserLocations: state.allUserLocations,
    allPlaces: state.allPlaces
  }
}

export default connect(mapStateToProps)(NewMap);
