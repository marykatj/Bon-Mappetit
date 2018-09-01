import React, { Component } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'

// <script src="https://maps.googleapis.com/maps/api/js?sensor=false&libraries=places&language=en"></script>

class ExploreSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      address: '',
    }
}

////////////////////////////////////////////////////////////////////////////////

  handleChange = (event) => {
    console.log("hiiiiii!")
    this.setState({
      term: event.target.value
    })
  }

  handleSelect = (event) => {
    event.preventDefault();
    this.setState({
      address: event.target.value
     })
     console.log("handle Select")
     //       let searchBox = new this.props.google.maps.places.SearchBox(event.target.value);
     //       searchBox.setBounds(map.getBounds());
  }

////////////////////////////////////////////////////////////////////////////////////////

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
        <PlacesAutocomplete value={this.state.term} onChange={this.handleChange} onSelect={this.handleSelect}>
          {renderInput}
        </PlacesAutocomplete>
    );
  }
}

//////////////////////////////////////////////////////////////////////////////////

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
