import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete'

// <script src="https://maps.googleapis.com/maps/api/js?sensor=false&libraries=places&language=en"></script>

class ExploreSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      selectedPlaceObject: {},   //should have coordinates attached.       // or address: ''
    }
}

////////////////////////////////////////////////////////////////////////////////

  handleChange = (event) => {
    console.log("hiiiiii!")
    this.setState({
      term: event.target.value
    })
  }

  handleSelect = (event) => {     // if these event listeners arent firing, how do i get the coordinates?
    event.preventDefault();
    console.log("handle Select")
    this.setState({
      selectedPlaceObject: event.target.value
     })
     //       let searchBox = new this.props.google.maps.places.SearchBox(event.target.value);
     //       searchBox.setBounds(map.getBounds());
  }

  // const setLocation = this.state.selectedPlaceObject
  // geocodeByAddress(address)
  //   .then(function(results) {
  //     setLocation(results[0].formatted_address)
  //   })
  //   .catch(error => console.error('Error', error))



  // var defaultBounds = new this.props.google.maps.LatLngBounds(
  //   new this.props.google.maps.LatLng(-33.8902, 151.1759),
  //   new this.props.google.maps.LatLng(-33.8474, 151.2631));
  //
  // var input = document.getElementById('searchTextField');
  //
  // var searchBox = new google.maps.places.SearchBox(input, {
  //   bounds: defaultBounds
  // });


////////////////////////////////////////////////////////////////////////////////////////

click = () => {
  console.log("wolfgang sucks")
}

render() {
  const renderInput = ({ getInputProps, getSuggestionItemProps, suggestions }) => (
    <div className="autocomplete-root" >
      <input className="form-control" {...getInputProps()} />
      <div className="autocomplete-dropdown-container">
        {suggestions.map(suggestion => (
          <div {...getSuggestionItemProps(suggestion)} className="suggestion">
            <span onSelect={this.handleSelect}>{suggestion.description}</span>
          </div>
        ))}
      </div>
    </div>
  );

    return (
        <PlacesAutocomplete value={this.state.term} onChange={this.handleChange} onSelect={this.handleSelect} onClick={this.click}>
          {renderInput}
        </PlacesAutocomplete>
    );
  }
}

//////////////////////////////////////////////////////////////////////////////////

// <input type="text" id="autocomplete" placeholder="Start typing here..."/>
//   <script>
//
//         let input = document.getElementById('autocomplete')
//         let autocomplete = new google.maps.places.Autocomplete(input)
//
//         google.maps.event.addListener(autocomplete, 'place_changed', function() {
//            let place = autocomplete.getPlace();
//            let address = place.formatted_address;
//            let name = place.name;
//            let newCenter = place.geometry.location;
//         });
//     </script>
//     <div id="map"/>
//       <script>
//
//             let map = document.getElementById('map')
//
//             google.maps.event.addListener(map, 'place_changed', function() {
//               console.log(newCenter)
//                map.setCenter(newCenter)
//             });
//
//
//         </script>

// function mapStateToProps(state) {
//   return {
//     allPlaces: state.allPlaces,
//   }
// }

/////////////////////////////////////////////////////////////////////////////////

//export default connect(mapStateToProps)(ExploreSearch);
export default ExploreSearch;

// componentDidMount() {
//   const config = {
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET',
//       'Access-Control-Allow-Credentials': true,
//       'Access-Control-Allow-Headers': 'Content-Type',
//       'Content-Type': 'application/json'
//     }
// }
//
// const googlePlacesURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.state.exploreSearchBar}&sensor=true&key=AIzaSyD8eyGeIVO1m-lMAwJ21o3qiUPRiuFV_ck`
//
//   fetch(googlePlacesURL, config)
//   .then(response => response.json())
//   .then(data => this.setState({
//     googlePlacesSearch: data
//   }))
// }

///////////////////////////////////////////////////////////////////////////////////

// const setLocation = this.props.setLocation // Pull in the setFormLocation function from the parent ReportForm
//
// geocodeByAddress(address)
//   .then(function(results) {
//     setLocation(results[0].formatted_address) // Set the location in the parent ReportFrom
//   })
//   .catch(error => console.error('Error', error))

// handleChange = (term) => {
//   console.log(term)
//   this.setState({ term })
// }
//
// handleSelect = (address) => {
//   this.setState({ address })

// import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'

////////////////////////////////////////////////////////////////////////////////////

//the selected place --- be part of state?
//{place}.results.formatted_address || .geometry.location.lat && .geometry.location.lng || .name || .place_id
// recieve an Array(?) of location objects:


// {
//   "html_attributions": [
//
//   ],
//   "next_page_token": "CqQCFQEAAGpIOLLAjMwi9Gz5JpttjidYD2kqno-msfFbYSX-MA7KLO4h4NGl0P6E7lyOc2DfyLdDD73PNXpweJbADoXqRFyJySruIZPioTp0R5k7_vSrci1w76uyR7nnKk6DWUkJoICexGjjTzVJtLrhyBp7JAIjeqbbONjxUHAYsVCy8a5YOzYuw0v0VEQLzYM48wE3ynkyakAF8PXzBO19T_p_c7DhDd9p5xFFxd8EHGAgjxw1HfmxuUFN1iQxZMcVQe0zyXmOUwF0JpyoamGJ2jz_2NXWoaMudcQ_RzXRogDdePcUDtgo3yEJ05gAyY5cp-dJ1Cn1f0FS701_khfxUzpT0LPLsf90CcddmBaXS7UvyqjsAvEdyaltEkOpPRhCibLOCBIQfbnd_-Ky6ZujDvztU0gJphoUF_xkRmT2ZjRtsIJUYfGRskA29WM",
//   "results": [
//     {
//       "formatted_address": "44 Grandville Ave SW # 100, Grand Rapids, MI 49503, USA",
//       "geometry": {
//         "location": {
//           "lat": 42.961856,
//           "lng": -85.67316799999999
//         },
//         "viewport": {
//           "northeast": {
//             "lat": 42.96320817989272,
//             "lng": -85.67169892010727
//           },
//           "southwest": {
//             "lat": 42.96050852010728,
//             "lng": -85.67439857989272
//           }
//         }
//       },
//       "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
//       "id": "e8b08239899061026299ab27c2e7aadfde28ef52",
//       "name": "Bistro Bella Vita",
//       "opening_hours": {
//         "open_now": true
//       },
//       "photos": [
//         {
//           "height": 3741,
//           "html_attributions": [
//             "<a href=\"https://maps.google.com/maps/contrib/110400709266396723737/photos\">Bistro Bella Vita</a>"
//           ],
//           "photo_reference": "CmRaAAAAK8EX87xzLhjZWm7cXu9_y8lxUg9X6Ax7iO97m3O_zsE7fyeB10u_ogPKhZb15DaDQksU0CCvTdR1fTFBncUwCJJUDsJhHtnkECk7XFSe_-ZN1OzOerRB26fCbTqOjqRgEhARfPWcqRho10PX6cdpFG55GhRpN3J3iDSXDI3p2OSNJ_2NcNZo1Q",
//           "width": 5613
//         }
//       ],
//       "place_id": "ChIJI3oaXMOtGYgRtsm-RPqpKf4",
//       "plus_code": {
//         "compound_code": "X86G+PP Grand Rapids, Michigan",
//         "global_code": "86JPX86G+PP"
//       },
//       "price_level": 3,
//       "rating": 4.6,
//       "reference": "CmRbAAAAttregSKVwLWQ95d1a_dCquQo6hrkguj8AYKB1wDGy0CjruvM_APkARzEiIVvDe_jJOLRWkc6OE57qk0LYTd5RWMpj_VIYT0rJb_IbvKTFbU7Ho8jYzPZ6OwC9k7hnnmvEhAFSsziLRejTSvf9-_LMXgdGhTWEefNtnhaSeKRm10OwTxfxR3Mzw",
//       "types": [
//         "restaurant",
//         "food",
//         "point_of_interest",
//         "establishment"
//       ]
//     },
