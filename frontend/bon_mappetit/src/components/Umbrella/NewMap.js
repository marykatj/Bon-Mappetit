import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import MapsMarker from './MapsMarker'
import PhotoMarker from './PhotoMarker'
import uuid  from 'uuid'
import pin from '../../images/logo.png'

const markerStyle = {
  position: "absolute",
  width: "15px",
  height: "15px",
  transform: "translate(-50%, -100%)",
  zIndex: '1000',
}

const pictureStyle = {
  position: "absolute",
  width: "90px",
  transform: "translate(-50%, -100%)",
  borderRadius: '8px'
}

////////////////////////////////////////////////////////////////////////////////

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
  if (this.props.currentPage === 'profile') {
    return this.props.allPlaces.map( place => <PhotoMarker src={place.image_url} style={pictureStyle} key={uuid()} place={place} lat={place.lat} lng={place.lng}/> )
  } else {
      return this.props.allPlaces.map( place => <MapsMarker src={pin} style={markerStyle} key={uuid()} place={place} lat={place.lat} lng={place.lng}/> )
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
