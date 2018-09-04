import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import MapsMarker from './MapsMarker'

//InforBox
//searchbar: make full text appear upon selection
//Make markers appear
//make markers for user/all
// geolocation on map
// photo upload

class NewMap extends Component {

  render() {
    return (
      <div style={{ height: '100vh', width: '100%', float: 'left'}} id='map'>
        <GoogleMapReact id='map-container'
          bootstrapURLKeys={{ key: 'AIzaSyD8eyGeIVO1m-lMAwJ21o3qiUPRiuFV_ck' }}
          center={[this.props.coord.lat, this.props.coord.lng]}
          defaultZoom={14} >
            <MapsMarker
            lat={this.props.coord.lat}
            lng={this.props.coord.lng} />
        </GoogleMapReact>
      </div>
    );
  }

///////////////////////////////////////////////////////////////////////////////

//<img style={markerStyle} src={pin} alt="" />

// <Marker
// lat={this.props.coord.lat}
// lng={this.props.coord.lng} />

//{this.createMarkers()}
//   createMarkers = () => {
//     console.log("Wolfgang sucks")
//       return <Marker lat='40.7053' lng='-74.0140'  />
// //     console.log(this.props.allPlaces)
// //     //need the place information from the allPlaces Array.  Once defined with user posts, then markers will have assignments,
// //     //return this.props.allPlaces.map(location => <Marker onClick={this.onMarkerClick} onMouseover={this.onMouseoverMarker} name={location.place} position={{lat: 40.7053, lng: -74.0140}} />)
// //     return <Marker id="currentIcon" onClick={this.onMarkerClick} onMouseover={this.onMouseoverMarker} name={"Current Location"} position={{lat: 40.7053, lng: -74.0140}} />
//    }
// // lat={this.props.coord.lat} lng={this.props.coord.lng}
//
}

///////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {
  return {
    coord: state.coord,
    allPlaces: state.allPlaces,                             //need to create an arary for only user markers, and display that one the user page.  make a seperate map component perhaps,
    allUserLocations: state.allUserLocations               // with just User markers.  maybe mae markers a different color for user vs non user
  }
}

export default connect(mapStateToProps)(NewMap);
