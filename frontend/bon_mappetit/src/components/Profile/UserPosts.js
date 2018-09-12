import React, { Component } from 'react';
import Posts from './Posts'
import uuid  from 'uuid'
import { connect } from 'react-redux';

class UserPosts extends Component {

////////////////////////////////////////////////////////////////////////////////

postMapper = () => {
  let userLocations = this.props.allPlaces.filter(post => {return (post.id > 17)})
  if (this.props.searchedPosts === undefined || this.props.searchedPosts.length === 0 ) {
     return userLocations.map(post => <Posts post={post} key={uuid()} />)
   } else {
     return this.props.searchedPosts.map(post => <Posts post={post} key={uuid()} />)
   }
 }

////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
        <div id="userPostsContainer">
          {this.postMapper()}
        </div>
    );
  }

}

////////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {
  return {
    searchedPosts: state.searchedPosts,
    allPlaces: state.allPlaces,
    userSearch: state.userSearch
  }
}

export default connect(mapStateToProps)(UserPosts)
