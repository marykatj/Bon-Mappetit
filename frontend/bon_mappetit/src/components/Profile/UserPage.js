import React, { Component } from 'react';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';
import UserMap from './UserMap';


class UserPage extends Component {

  render() {
    return (
        <div>
          <UserInfo />
          <UserPosts />
          <UserMap />
        </div>
    );
  }

}

export default UserPage
