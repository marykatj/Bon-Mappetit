import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSearchAction } from '../../action'

class UserSearch extends Component {

handleChange = (event) => {
  this.props.userSearch(event.target.value)
}

    render() {
      return (
        <div className="User-search">
          <form id="search-form">
            <input id="search-bar" type='input' placeholder='Find your places...' value={this.props.search} onChange={this.handleChange}/>
      </form>
    </div>
      )  
    }

}

//////////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {             //totally needed????
  return {
    userSearch: state.userSearch,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userSearch: (term) => dispatch(userSearchAction(term)),
    dispatch
  }
  }
/////////////////////////////////////////////////////////////////////////////////

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
