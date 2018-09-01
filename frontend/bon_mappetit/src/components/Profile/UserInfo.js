import React, { Component } from 'react';
import UserSearch from './UserSearch';
import ProfilePic from '../../images/ProfilePic.jpg'

const avatarStyle = {
  width: "300px",
  height: "200px",
}

class UserInfo extends Component {

  render() {
    return (
        <div>
          <img src={ProfilePic} style={avatarStyle} alt=""/>
          <h2> Welcome, Mary-Kate! </h2>
          <UserSearch />
          <h3> Boston </h3>
        </div>
    );
  }

}

export default UserInfo;

//add in avatar picture
// https://github.com/mosch/react-avatar-editor
