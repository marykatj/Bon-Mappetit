import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'

class ExploreSearch extends Component {

  constructor(props) {
    super(props);
    this.state = { address: '' }
}

  // state = {
  //   exploreSearchBar: {},
  //   googlePlacesSearch: {},
  // }
  //

////////////////////////////////////////////////////////////////////////////////

  handleChange = (address) => {
    this.setState({ address })
  }

  handleSelect = (address) => {
    console.log(address)
  // const setLocation = this.props.setLocation // Pull in the setFormLocation function from the parent ReportForm
  //
  // geocodeByAddress(address)
  //   .then(function(results) {
  //     setLocation(results[0].formatted_address) // Set the location in the parent ReportFrom
  //   })
  //   .catch(error => console.error('Error', error))
}

////////////////////////////////////////////////////////////////////////////////////////

render() {
  const renderInput = ({ getInputProps, getSuggestionItemProps, suggestions }) => (
    <div className="autocomplete-root">
      <input className="form-control" {...getInputProps()} />
      <div className="autocomplete-dropdown-container">
        {suggestions.map(suggestion => (
          <div {...getSuggestionItemProps(suggestion)} className="suggestion">
            <span>{suggestion.description}</span>
          </div>
        ))}
      </div>
    </div>
  );

    return (
        <PlacesAutocomplete value={this.state.address} onChange={this.handleChange} onSelect={this.handleSelect}>
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
