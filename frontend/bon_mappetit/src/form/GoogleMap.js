import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyle = {
  float: "left",
  width: "50vw",
  height: "89.5vh",
}

const markers = []

export class GoogleMap extends Component {

  state = {
    selectedPlace: {},
    activeMarker: {},
    showingInfoWindow: false,
    center: {}
  }

  //make coordinates a state within search, and then transfer that state to google map in boundaries. center,
  //need Navigator property for browser location. default is San Fran

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

createMarkers = () => {
  console.log(this.props.google.maps)
  // console.log(this.props.allPlaces)   //need the place information from the allPlaces Array.  Once defined with user posts, then markers will have assignments,
  //return this.props.allPlaces.map(location => <Marker onClick={this.onMarkerClick} onMouseover={this.onMouseoverMarker} name={location.place} position={{lat: 40.7053, lng: -74.0140}} />)
  return <Marker onClick={this.onMarkerClick} onMouseover={this.onMouseoverMarker} name={"Current Location"} position={{lat: 40.7053, lng: -74.0140}} />
}

  render() {

    return (
          <div id='map'>

            <Map id='map-component' google={this.props.google} zoom={14} center={this.props.center} style={mapStyle} className='map' onClick={this.onMapClicked} >
                  {this.createMarkers()}

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

export default GoogleApiWrapper({
  apiKey: ('AIzaSyD8eyGeIVO1m-lMAwJ21o3qiUPRiuFV_ck')
})(GoogleMap);



// {markers.map(marker =>
// <Marker
//     key={marker.get('title') }
//     title={marker.get('title') }
//     description={marker.get('description') }
//     properties={marker.get('properties') }
//     position={marker.get('position') }
//     mapOn={marker.get('mapOn') }
//     addMarker={this.props.addMarker}
//     onMarkerClick={this.props.onMarkerClick}/>
//     ) }
//
// <InfoWindow {...this.props}
//   marker={this.props.activeMarker}
//   visible={this.props.showingInfoWindow}>
//
// <div>
// <h4>{this.props.selectedTitle}</h4>
// </div>
// </InfoWindow>
//
// </div>

///////////////////////////////////////////////////////////////////////////////////////

//center={new this.props.google.maps.LatLng(-34.397, -34.397)}

// map.setCenter()

// onPlaceChanged = () => {
//   let place = autocomplete.getPlace();
//   if (place.geometry) {
//     map.panTo(place.geometry.location);
//     map.setZoom(15);
//     search();
//   } else {
//     document.getElementById('autocomplete').placeholder = 'Enter a city';
//   }
// }

//    let center = new this.props.google.maps.LatLngBounds(
  //   new this.props.google.maps.LatLng(-33.8902, 151.1759),
  //   new this.props.google.maps.LatLng(-33.8474, 151.2631)
  // )

  //   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input)
  // document.getElementById('map').controls[this.props.google.maps.ControlPosition.TOP_LEFT].push(input);   NEED TO DEFINE MAP IN INDEX.HTML FOR THIS TO WORK

  // var bounds = new this.props.google.maps.LatLngBounds();    //mapCenter
  //map.setCenter(newCenter)

  ///////////////////////////////////////////////////////////////////////////////

  // icon={{
  //   url: "/path/to/custom_icon.png",
  //   anchor: new google.maps.Point(32,32),
  //   scaledSize: new google.maps.Size(64,64)
  // }}

  // setGeoLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       let pos = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       };
  //
  //       infoWindow.setPosition(pos);
  //       infoWindow.setContent('Location found.');
  //       infoWindow.open(map);
  //       map.setCenter(pos);
  //     }, function() {
  //       handleLocationError(true, infoWindow, map.getCenter());
  //     });
  //
  //   } else {
  //         handleLocationError(false, infoWindow, map.getCenter());
  //           }
  //         }
  //
  //          handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
  //           infoWindow.setPosition(pos);
  //           infoWindow.setContent(browserHasGeolocation ?
  //                               'Error: The Geolocation service failed.' :
  //                               'Error: Your browser doesn\'t support geolocation.');
  //           infoWindow.open(map);
  //       }
  // }   {this.setGeoLocation()}

    /////////////////////////////////////////////////////////////////////////////////
  //
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


  //create icon with URL/anchor/scaledSize
