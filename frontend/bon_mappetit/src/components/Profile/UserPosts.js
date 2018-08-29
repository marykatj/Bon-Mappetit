import React, { Component } from 'react';
import Posts from './Posts'

class UserPosts extends Component {

  render() {
    return (
        <div className="User-posts-container">
          <h1> User Posts </h1>
          <Posts />
        </div>
    );
  }

}

export default UserPosts;
