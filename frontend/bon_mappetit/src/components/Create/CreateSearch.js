import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createSearchAction } from '../../action'

class CreateSearch extends Component {

  handleChange = (event) => {
    this.props.createSearch(event.target.value)
  }

    render() {
      return (
        <div className="Create-search">
          <form id="search-form">
            <input id="search-bar" type='input' placeholder='Where are you?' value={this.props.search} onChange={this.handleChange}/>
      </form>
    </div>
      )
    }

}

//////////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {             //totally needed????
  return {
    createSearch: state.createSearch,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createSearch: (term) => dispatch(createSearchAction(term)),
    dispatch
  }
  }
/////////////////////////////////////////////////////////////////////////////////

export default connect(mapStateToProps, mapDispatchToProps)(CreateSearch);
