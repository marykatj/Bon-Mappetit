import React, { Component } from 'react';
import Posts from './Posts'

class UserPosts extends Component {

  render() {
    return (
        <div className="User-posts-container">
          <h3> My food </h3>
          <Posts />
        </div>
    );
  }

}

export default UserPosts;
