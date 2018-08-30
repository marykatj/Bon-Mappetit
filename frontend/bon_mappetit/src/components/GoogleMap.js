import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyle = {
  float: "left",
  width: "50vw",
  height: "89.5vh",
}

//need Navigator property for browser location. default is San Fran

export class GoogleMap extends Component {

  state = {
    selectedPlace: {},
    activeMarker: {},
    showingInfoWindow: false,

    // currentLocation: {
    //   lat: lat,
    //   lng: lng
    //   }
    }

  // renderChildren = () => {           //responsible for calling the methods on the children markers
  //     const {children} = this.props  // here we create clones or copies of the children to display in the map
  //     if (!children) return;
  //
  //     return React.Children.map(children, c => {
  //     return React.cloneElement(c, {                // copies of the children are passed map props
  //       map: this.map,                              //the map instance....where does this come from?????
  //       google: this.props.google,                 // google api instance
  //       mapCenter: this.props.position            // map center
  //     });
  //   })
  // }
    //   {this.renderChildren()}

    onMarkerClick = (props, marker, event) => {
      console.log("marker click event")
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    }

    onMapClicked = (props) => {
      console.log("map clicked")
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };

    onMouseoverMarker(props, marker, event) {
      console.log("mouse over event")
    }



////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div>
      <Map google={this.props.google} zoom={14} style={mapStyle} className='map' onClick={this.onMapClicked}>

              <Marker onClick={this.onMarkerClick}
                      onMouseover={this.onMouseoverMarker}
                      name={'Current location'} />

              <InfoWindow onClose={this.onInfoWindowClose} marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                  <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                  </div>
              </InfoWindow>

            </Map>

      </div>
    )
  }
}


//create icon with URL/anchor/scaledSize

export default GoogleApiWrapper({
  apiKey: ('AIzaSyD8eyGeIVO1m-lMAwJ21o3qiUPRiuFV_ck')
})(GoogleMap);


//set defaultCenter={{ lat: -34.397, lng: 150.644 }} === browserLocation
