import React, { Component } from 'react';
import Posts from './Posts'
import { connect } from 'react-redux';

class UserPosts extends Component {

postMapper = () => {
  if (this.props.userSearch === '') {
    return this.props.allUserLocations.map(post => <Posts post={post} key={post}/>)
  } else {
       const filteredPosts = this.props.allUserLocations.filter(post => {return (post.location.toLowerCase().includes(this.props.userSearch.toLowerCase()))})
       return filteredPosts.map(post => <Posts post={post} key={post}/>)
   }   
}

  render() {
    return (
        <div id="userPostsContainer">
          <h3> My food </h3>
          {this.postMapper()}
        </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    allUserLocations: state.allUserLocations,
    allPlaces: state.allPlaces,
    userSearch: state.userSearch
  }
}

export default connect(mapStateToProps)(UserPosts)
