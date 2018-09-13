import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import MapsMarker from './MapsMarker'
import PhotoMarker from './PhotoMarker'
import uuid  from 'uuid'

  //  const markerIcon = new google.maps.Marker({ icon: pin, scaledSize: new google.maps.Size(64, 64), size: new google.maps.Size(48, 48), optimized: false })
  // size: new google.maps.Size(71, 71),
  //origin: new google.maps.Point(0, 0),
  //anchor: new google.maps.Point(17, 34),
  // scaledSize: new google.maps.Size(64, 64)

  const mapStyleArray = [{"featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{"visibility": "on"}, {"color": "#e0efef"}]}, {"featureType": "poi", "elementType": "geometry.fill", "stylers": [{"visibility": "on"},
  {"hue": "#1900ff"}, {"color": "#c0e8e8"}]}, {"featureType": "road", "elementType": "geometry", "stylers": [{"lightness": 100}, {"visibility": "simplified"}]}, {"featureType": "road", "elementType": "labels", "stylers": [{"visibility": "off"}]}, {"featureType": "transit.line","elementType": "geometry", "stylers": [{"visibility": "on"}, {"lightness": 700}]}, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#7dcdcd"}]}]

////////////////////////////////////////////////////////////////////////////////

class NewMap extends Component {

  render() {
    return (
      <div style={{ height: '100vh', width: '100%', float: 'left'}} id='map'>
        <GoogleMapReact id='map-container'
          bootstrapURLKeys={{ key: 'AIzaSyD8eyGeIVO1m-lMAwJ21o3qiUPRiuFV_ck' }}
          options={{ styles: mapStyleArray }}
          center={[this.props.coord.lat, this.props.coord.lng]}
          defaultZoom={14} >
          {this.createAllMarkers()}
        </GoogleMapReact>
      </div>
    );
  }

///////////////////////////////////////////////////////////////////////////////


createAllMarkers = () => {
  let userLocations = this.props.allPlaces.filter(post => {return (post.id > 19)})
  let exploreLocations = this.props.allPlaces.filter(post => {return (post.id < 20)})
  //does not update state until after. allPlaces includes post, but filter locations does not.

  if (this.props.currentPage === 'profile') {
    return userLocations.map( place => <PhotoMarker key={uuid()} place={place} lat={place.lat} lng={place.lng} /> )
    } else if (this.props.currentPage === 'explore') {
      return exploreLocations.map( place => <PhotoMarker key={uuid()} place={place} lat={place.lat} lng={place.lng}/> )
  } else {
      return userLocations.map( place => <MapsMarker key={uuid()} place={place} lat={place.lat} lng={place.lng}/> )
    }
  }

}

///////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {
  return {
    coord: state.coord,
    allPlaces: state.allPlaces,
    currentPage: state.currentPage,
  }
}

export default connect(mapStateToProps)(NewMap);
