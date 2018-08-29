import React, { Component } from 'react';
import UserSearch from './UserSearch';

class UserInfo extends Component {

  render() {
    return (
        <div>
          <img src="" />
          <h2> Welcome, Friend! </h2>
          <UserSearch />
          <h3> Location </h3>
        </div>
    );
  }

}

export default UserInfo;

//add in avatar picture
// https://github.com/mosch/react-avatar-editor
