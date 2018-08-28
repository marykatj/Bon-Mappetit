import React, { Component } from 'react';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';
import UserMap from './UserMap';
import UserSearch from './UserSearch';

class UserPage extends Component {

  render() {
    return (
        <div className='App-body'>
          <h1> profile page! </h1>
          <UserInfo />
          <UserMap />
          <UserPosts />
          <UserSearch />
        </div>
    );
  }

}

export default UserPage;
