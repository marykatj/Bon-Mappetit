import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'

const searchBarStyle = {
  float: "right"
}

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
  const setFormLocation = this.props.setFormLocation // Pull in the setFormLocation function from the parent ReportForm

  geocodeByAddress(address)
    .then(function(results) {
      setFormLocation(results[0].formatted_address) // Set the location in the parent ReportFrom
    })
    .catch(error => console.error('Error', error))
}

////////////////////////////////////////////////////////////////////////////////////////

render() {
  const renderInput = ({ getInputProps, getSuggestionItemProps, suggestions }) => (
    <div className="autocomplete-root">
      <input className="form-control" {...getInputProps()} style={searchBarStyle}/>
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
      <div className="Explore-search">
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {renderInput}
        </PlacesAutocomplete>
      </div>
    );
  }
}

//     render() {
//       //console.log(this.state.exploreSearchBar)
//       //console.log(this.state.searchBarLocation)
//       //console.log(this.state.searchBarLocation.results)
//       return (
//         <div className="Explore-search">
//           <form id="search-form" onSubmit={this.handleSubmit}>
//             <input id="address" className='input-field' type='text' ref='input' placeholder='Search an area...' value={this.state.address} onChange={this.handleChange}/>
//             <button onSubmit={this.handleSubmit}>Submit</button>
//       </form>
//     </div>
//       )
//     }
//
// }

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
// //const googlePlacesURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Grand+Rapids+Michigan&url=true&sensor=true&key=AIzaSyD8eyGeIVO1m-lMAwJ21o3qiUPRiuFV_ck`
//
//   fetch(googlePlacesURL, config)
//   .then(response => response.json())
//   .then(data => this.setState({
//     googlePlacesSearch: data
//   }))
// }
