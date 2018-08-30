import React, { Component } from 'react'
import { connect } from 'react-redux';
import { exploreSearchAction } from '../../action'

class ExploreSearch extends Component {

  handleChange = (event) => {
    this.props.exploreSearch(event.target.value)
  }
    render() {
      return (
        <div className="Explore-search">
          <form id="search-form">
            <input id="search-bar" type='input' placeholder='Search an area...' />
      </form>
    </div>
      )
    }

}

//////////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {             //totally needed????
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
