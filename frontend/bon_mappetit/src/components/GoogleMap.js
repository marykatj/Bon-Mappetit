import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyle = {
  float: "left",
  width: "50vw",
  height: "89.5vh",
}


export class GoogleMap extends Component {

  state = {
    selectedPlace: {},
    activeMarker: {},
    showingInfoWindow: false,
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

// fetchPlaces(mapProps, map) {
//   const { google } = mapProps;
//   const service = new google.maps.places.PlacesService(map);
//   return service;
// }

// initialize = () => {
//   let mapOptions = {
//     zoom: 8,
//     center: new this.props.google.maps.LatLng(-34.397, 150.644)
//   };
//   let map = new this.props.google.maps.Map(document.getElementById('map-container'), mapOptions)
// }

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

createMarkers = () => {
  console.log(this.props.google.maps)
  // console.log(this.props.allPlaces)   //need the place information from the allPlaces Array.  Once defined with user posts, then markers will have assignments,
  //return this.props.allPlaces.map(location => <Marker onClick={this.onMarkerClick} onMouseover={this.onMouseoverMarker} name={location.place} position={{lat: 40.7053, lng: -74.0140}} />)
  return <Marker onClick={this.onMarkerClick} onMouseover={this.onMouseoverMarker} name={"Current Location"} position={{lat: 40.7053, lng: -74.0140}} />
}

//now need to dynamically create markers based on post locations.
// 1 icon for current location, different icon design for post locations.
//need to iterate over all post locations.  Import the allPlaces State & the allUserLocations state into here.


//
//////////////////////////////////////////////////////////////////////////////////

  render() {

    return (
      <div id='map'>

      <Map google={this.props.google} zoom={14}  style={mapStyle} className='map' onClick={this.onMapClicked} id='map-component' onReady={this.fetchPlaces}>

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

// icon={{
//   url: "/path/to/custom_icon.png",
//   anchor: new google.maps.Point(32,32),
//   scaledSize: new google.maps.Size(64,64)
// }}


//    let defaultBounds = new this.props.google.maps.LatLngBounds(
  //   new this.props.google.maps.LatLng(-33.8902, 151.1759),
  //   new this.props.google.maps.LatLng(-33.8474, 151.2631)
  // )
//   let options = {
//     bounds: defaultBounds
//   }
//
//   let input = document.getElementById('autocomplete')
//   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input)
//
//   let autocomplete = new google.maps.places.Autocomplete(input, options)
//
//   google.maps.event.addListener(autocomplete, 'place_changed', function(){
//      let place = autocomplete.getPlace()
//   })
//
//
//   function geolocate() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(function(position) {
//         var geolocation = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         };
//         var circle = new google.maps.Circle({
//           center: geolocation,
//           radius: position.coords.accuracy
//         });
//         autocomplete.setBounds(circle.getBounds());
//       });
//     }
//   }
//
// </script>

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

// currentLocation: {
//   lat: lat,
//   lng: lng
//   }

// let points = [
// { lat: 42.02, lng: -77.01 },
// { lat: 42.03, lng: -77.02 },
// { lat: 41.03, lng: -77.04 },
// { lat: 42.05, lng: -77.02 }
// ]
//
// var bounds = new this.props.google.maps.LatLngBounds();    //mapCenter
// for (var i = 0; i < points.length; i++) {
//   bounds.extend(points[i]);
// }

//{this.initialize()}    bounds={bounds}. center={center}
