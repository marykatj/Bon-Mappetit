import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class GoogleMap extends Component {

  state = {
    selectedPlace: ''
  }

////////////////////////////////////////////////////////////////////////////////

  render() {
    const mapStyle = {
      float: "left",
      width: "50vw",
      height: "89.5vh",
    }
    return (
      <Map google={this.props.google} zoom={14} className="user-map" style={mapStyle}>

              <Marker onClick={this.onMarkerClick}
                      name={'Current location'} />

              <InfoWindow onClose={this.onInfoWindowClose}>
                  <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                  </div>
              </InfoWindow>
            </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyD8eyGeIVO1m-lMAwJ21o3qiUPRiuFV_ck')
})(GoogleMap);


//set defaultCenter={{ lat: -34.397, lng: 150.644 }} === browserLocation
