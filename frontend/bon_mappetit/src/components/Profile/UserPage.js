import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchPostsAction, userPostsAction } from '../../action';

import UserInfo from './UserInfo';
import UserPosts from './UserPosts';
import UserMap from './UserMap';
import LocationSearchInput from '../Umbrella/LocationSearchInput';


// const railsAPI = 'http://localhost:3000/api/v1/posts'


class UserPage extends Component {

  // componentDidMount() {
  //   fetch(railsAPI).then(response => response.json()).then(data => this.props.fetchPosts(data))
  // };
  //
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

  // function mapStateToProps(state) {
  //   return {
  //     allPlaces: state.allPlaces,
  //     allUserLocations: state.allUserLocations
  //   }
  // }
  //
  // function mapDispatchToProps(dispatch) {
  //   return {
  //     fetchPosts: (data) => dispatch(fetchPostsAction(data)),
  //     userPosts: (filteredPosts) => dispatch(userPostsAction(filteredPosts)),
  //     dispatch
  //   }
  // }
  /////////////////////////////////////////////////////////////////////////////////

  //export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
  export default UserPage;


//////////////////////////////////////////////////////////////////////////////////////////

  // componentDidMount() {  //upon loading, need to load both allPlaces && allUserLocations
  //   fetch(railsAPI)
  //     .then(response => response.json())
  //     .then(data => data.forEach(post => {
  //         const newPost = new Post(post);      //need to connect Post class
  //         document.getElementById('userPostsContainer').innerHTML += newPost.renderListItem();
  //     })
  //   )
  // };

  // componentDidMount() {  //upon loading, need to load both allPlaces && allUserLocations
  //   fetch(railsAPI)
  //     .then(response => response.json())
  //     .then(data => this.setState({
  //       allUserLocations: data
  //     }))
  // };
