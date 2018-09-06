import React, { Component } from 'react';
import UserSearch from './UserSearch';
import ProfilePic from '../../images/ProfilePic.jpg'

const avatarStyle = {
  width: "300px",
  height: "200px",
  margin: "20px 0 0 20px",
  borderRadius: '4px',
  border: '4px solid black',
}

const userInfoStyle = {
  margin: "20px 0 20px 20px",
}

class UserInfo extends Component {

  render() {
    return (
        <div>
          <img src={ProfilePic} style={avatarStyle} alt=""/>
          <h2 style={userInfoStyle}> Welcome, Mary-Kate! </h2>
          <UserSearch />
          <h3 style={userInfoStyle}> Boston </h3>
        </div>
    );
  }

}

export default UserInfo;

//add in avatar picture
// https://github.com/mosch/react-avatar-editor
