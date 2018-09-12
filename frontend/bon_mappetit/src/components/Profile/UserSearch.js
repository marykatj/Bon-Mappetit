import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSearchAction } from '../../action'

class UserSearch extends Component {

  state = {
    search: ''
  }

handleChange = (event) => {
  this.setState({
    search: event.target.value
  })
  this.filterPosts();
}

filterPosts = () => {
  let userLocations = this.props.allPlaces.filter(post => {return (post.id > 17)})
  let filteredPosts = userLocations.filter(post => {return (post.address.toLowerCase().includes(this.state.search.toLowerCase()))})
  this.props.userSearch(filteredPosts)
}

    render() {
      return (
        <div className="User-search">
          <form id="search-form">
            <input id="search-bar" type='input' placeholder='search your places...' value={this.props.search} onChange={this.handleChange}/>
      </form>
    </div>
      )
    }

}

//////////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {
  return {
    allPlaces: state.allPlaces
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userSearch: (filteredPosts) => dispatch(userSearchAction(filteredPosts)),
    dispatch
  }
}
/////////////////////////////////////////////////////////////////////////////////

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
