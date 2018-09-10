import React, { Component } from 'react';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';
import UserMap from './UserMap';
import LocationSearchInput from '../Umbrella/LocationSearchInput';


class UserPage extends Component {

  // filterUserPosts = () => {
  //   const filteredPosts = this.props.allPlaces.filter(post => {return (post.user_id.includes())});  //Apply some logic that filters this.state.allPlaces to be this.state.allUserLocations based on user_id
  //   this.userPostsAction(filteredPosts)
  // }

  filterUserPosts = () => {
    console.log("hello there")
  }

  render() {
    return (
        <div>
        <h2 id="user-savor"> savor. </h2>
        {this.filterUserPosts()}
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
