import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

//InforBox

const Marker = () => <Icon name='marker' size='big' color='red' id="currentIcon"/>

class NewMap extends Component {


  render() {
    return (
      <div style={{ height: '100vh', width: '100%', float: 'left'}} id='map'>
        <GoogleMapReact id='map-container'
          bootstrapURLKeys={{ key: 'AIzaSyD8eyGeIVO1m-lMAwJ21o3qiUPRiuFV_ck' }}
          center={[this.props.coord.lat, this.props.coord.lng]}
          defaultZoom={14} >
          {this.createMarkers()}
        </GoogleMapReact>
      </div>
    );
  }

///////////////////////////////////////////////////////////////////////////////

  createMarkers = () => {
    console.log(this.props.coord.lat)
    // console.log(this.props.allPlaces)   //need the place information from the allPlaces Array.  Once defined with user posts, then markers will have assignments,
    //return this.props.allPlaces.map(location => <Marker onClick={this.onMarkerClick} onMouseover={this.onMouseoverMarker} name={location.place} position={{lat: 40.7053, lng: -74.0140}} />)
    return <Marker lat={this.props.coord.lat} lng={this.props.coord.lng} onClick={this.onMarkerClick} onMouseover={this.onMouseoverMarker} name={"Current Location"} position={{lat: 40.7053, lng: -74.0140}} />
  }


}

///////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {
  return {
    coord: state.coord,
  }
}

export default connect(mapStateToProps)(NewMap);
