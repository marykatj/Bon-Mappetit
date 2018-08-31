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
      <div id='map'>
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

  /////////////////////////////////////////////////////////////////////////////////


// {this.initAutocomplete()}
//
//     initAutocomplete = () => {
//       let map = document.getElementById('map')
//       console.log(map) //, {
//       //   center: {lat: -33.8688, lng: 151.2195},
//       //   zoom: 13,
//       //   mapTypeId: 'roadmap'
//       // });
//
//       // Create the search box and link it to the UI element.
//       let input = document.getElementById('search-form');
//       let searchBox = new this.props.google.maps.places.SearchBox(input);
//       document.getElementById('map').controls[this.props.google.maps.ControlPosition.TOP_LEFT].push(input);
//
//       // Bias the SearchBox results towards current map's viewport.
//       map.addListener('bounds_changed', function() {
//         searchBox.setBounds(map.getBounds());
//       });
//
//       var markers = [];
//       // Listen for the event fired when the user selects a prediction and retrieve
//       // more details for that place.
//       searchBox.addListener('places_changed', function() {
//         var places = searchBox.getPlaces();
//
//         if (places.length === 0) {
//           return;
//         }
//
//         // Clear out the old markers.
//         markers.forEach(function(marker) {
//           marker.setMap(null);
//         });
//         markers = [];
//
//         // For each place, get the icon, name and location.
//         var bounds = new this.props.google.maps.LatLngBounds();
//         places.forEach(function(place) {
//           if (!place.geometry) {
//             console.log("Returned place contains no geometry");
//             return;
//           }
//           var icon = {
//             url: place.icon,
//             size: new this.props.google.maps.Size(71, 71),
//             origin: new this.props.google.maps.Point(0, 0),
//             anchor: new this.props.google.maps.Point(17, 34),
//             scaledSize: new this.props.google.maps.Size(25, 25)
//           };
//
//           // Create a marker for each place.
//           markers.push(new this.props.google.maps.Marker({
//             map: map,
//             icon: icon,
//             title: place.name,
//             position: place.geometry.location
//           }));
//
//           if (place.geometry.viewport) {
//             // Only geocodes have viewport.
//             bounds.union(place.geometry.viewport);
//           } else {
//             bounds.extend(place.geometry.location);
//           }
//         });
//         map.fitBounds(bounds);
//       });
//     }
}


//create icon with URL/anchor/scaledSize

export default GoogleApiWrapper({
  apiKey: ('AIzaSyD8eyGeIVO1m-lMAwJ21o3qiUPRiuFV_ck')
})(GoogleMap);


//set defaultCenter={{ lat: -34.397, lng: 150.644 }} === browserLocation
