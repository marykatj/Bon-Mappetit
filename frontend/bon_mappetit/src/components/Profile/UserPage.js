import React, { Component } from 'react';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';
import UserMap from './UserMap';
import LocationSearchInput from '../Umbrella/LocationSearchInput';

class UserPage extends Component {

  render() {
    return (
        <div>
        <h1 id="user-savor"> savor. </h1>
          <UserInfo />
          <LocationSearchInput />
          <UserPosts />
          <UserMap />
        </div>
    );
  }
}

  //////////////////////////////////////////////////////////////////////////////////

  export default UserPage;
