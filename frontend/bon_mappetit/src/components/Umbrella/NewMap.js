import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import MapsMarker from './MapsMarker'

//searchbar: make full text appear upon selection
// geolocation on map

// photo upload
// clicke event on marker to render a tile component

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
    console.log("Custard Butt.")
      return this.props.allMarkers.map( place => <MapsMarker lat={place.lat} lng={place.lng} key={place} place={place}/>)
   }

   // return this.props.userMarkers.map( place => <MapsMarker lat={place.lat} lng={place.lng} key={place}/>)  // create a different marker image. Only render on user page.
}

///////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {
  return {
    coord: state.coord,
    allMarkers: state.allMarkers,
    userMarkers: state.userMarkers
  }
}

export default connect(mapStateToProps)(NewMap);
