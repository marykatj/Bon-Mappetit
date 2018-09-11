/*global google*/
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import MapsMarker from './MapsMarker'
import PhotoMarker from './PhotoMarker'
import uuid  from 'uuid'
import pin from '../../images/logo.png'

const markerStyle = {
  position: "absolute",
  width: "5%",
  height: "5%",
  // width: "15px",
  // height: "15px",
  transform: "translate(-50%, -100%)",
  zIndex: '1000',
}

const pictureStyle = {
  position: "absolute",
  width: "90px",
  height: '60px',
  transform: "translate(-50%, -100%)",
  borderRadius: '8px',
  // size: new google.maps.Size(71, 71),
  //origin: new google.maps.Point(0, 0),
  //anchor: new google.maps.Point(17, 34),
  // scaledSize: new google.maps.Size(64, 64)
}


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
  if (this.props.currentPage === 'profile') {
    return this.props.allUserLocations.map( place => <PhotoMarker src={place.image_url} style={pictureStyle} key={uuid()} place={place} lat={place.lat} lng={place.lng}/> )
  } else if (this.props.currentPage === 'explore') {
    return this.props.allPlaces.map( place => <PhotoMarker src={place.image_url} style={pictureStyle} key={uuid()} place={place} lat={place.lat} lng={place.lng}/> )
  } else {
      return this.props.allUserLocations.map( place => <MapsMarker src={pin} style={markerStyle} key={uuid()} place={place} lat={place.lat} lng={place.lng}/> )
    }
  }

}

///////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {
  return {
    coord: state.coord,
    allUserLocations: state.allUserLocations,
    allPlaces: state.allPlaces,
    currentPage: state.currentPage,
  }
}

export default connect(mapStateToProps)(NewMap);
