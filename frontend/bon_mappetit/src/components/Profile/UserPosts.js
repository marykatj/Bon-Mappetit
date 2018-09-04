import React, { Component } from 'react';
import Posts from './Posts'
import { connect } from 'react-redux';

class UserPosts extends Component {


////////////////////////////////////////////////////////////////////////////////

postMapper = () => {
  if (this.props.userSearch === '') {
    return this.props.allUserLocations.map(post => <Posts post={post} key={post}/>)
  } else {
       const filteredPosts = this.props.allUserLocations.filter(post => {return (post.place.toLowerCase().includes(this.props.userSearch.toLowerCase()))})
       return filteredPosts.map(post => <Posts post={post} key={post}/>)
   }
}

////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
        <div id="userPostsContainer">
          <h2> savor. </h2>
          {this.postMapper()}
        </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    allUserLocations: state.allUserLocations,
    userSearch: state.userSearch
  }
}

export default connect(mapStateToProps)(UserPosts)
