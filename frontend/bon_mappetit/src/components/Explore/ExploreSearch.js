import React, { Component } from 'react'
import { connect } from 'react-redux';
import { exploreSearchAction } from '../../action'

class ExploreSearch extends Component {

  state = {
    searchBarLocation: {}
  }

  handleChange = (event) => {
    this.props.exploreSearch(event.target.value)
  }

//OPTION 1:
//CORS ERROR: can do { mode: 'no-cors' } to recieve an opague response.  Service worked acts as agnostic cache.

//OPTION 2:
// Access-Control-Allow-Origin: http://localhost:3000    add a header to the response in our server code ...but with a GET request, we dont need a header?
// Access-Control-Allow-Methods: GET
// Access-Control-Allow-Headers: Content-Type

//REQUEST THROUGH A CORS PROXY?

  componentDidMount() {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
      }
  }

  const googlePlacesURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Grand+Rapids+Michigan&url=true&sensor=true&key=AIzaSyD8eyGeIVO1m-lMAwJ21o3qiUPRiuFV_ck`

    fetch(googlePlacesURL, config)
    .then(response => response.json())
    .then(data => this.setState({
      searchBarLocation: data
    }))
  }


  ////////////////////////////////////////////////////////////////////////////////////////

    render() {
      return (
        <div className="Explore-search">
          <form id="search-form">
            <input id="search-bar" type='input' placeholder='Search an area...' value={this.props.search} onChange={this.handleChange}/>
      </form>
    </div>
      )
    }
}

//////////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {
  return {
    exploreSearch: state.exploreSearch,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    exploreSearch: (term) => dispatch(exploreSearchAction(term)),
    dispatch
  }
}
/////////////////////////////////////////////////////////////////////////////////

export default connect(mapStateToProps, mapDispatchToProps)(ExploreSearch);
