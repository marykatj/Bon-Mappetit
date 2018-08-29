import React, { Component } from 'react';
import Posts from './Posts'
import { connect } from 'react-redux';

class UserPosts extends Component {

  //accept array of state here. connect?
postMapper = () => {
  return this.props.allUserLocations.map(post => <Posts post={post} key={post}/>)
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
  }
}

//export default UserPosts;
export default connect(mapStateToProps)(UserPosts)
