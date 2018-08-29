import React, { Component } from 'react';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';
import UserMap from './UserMap';
import UserSearch from './UserSearch';

class UserPage extends Component {

  render() {
    return (
        <div>
          <UserInfo />
          <UserMap />
          <UserPosts />
          <UserSearch />
        </div>
    );
  }

}

export default UserPage;
