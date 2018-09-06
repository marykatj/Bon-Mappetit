import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPostsAction } from './action'

import NavBar from './components/NavBar';
import UserPage from './components/Profile/UserPage';
import CreatePage from './components/Create/CreatePage';
import ExplorePage from './components/Explore/ExplorePage';

  const postsAPI = 'http://localhost:3000/api/v1/posts';
  //const usersAPI = 'http://localhost:3000/api/v1/users';

class App extends Component {

  // componentDidMount() {
  //   fetch(postsAPI)
  //     .then(response  => response.json())
  //     .then(data => this.props.fetchPosts(data));
  //   };

  // fetch(usersAPI)
  //   .then(response  => response.json())
  //   .then(json => console.log(json));
  // });

//////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/explore' component={ ExplorePage } />
          <Route path='/profile' render={ (props) => (
            <UserPage {...props}/>
          )} />
          <Route path='/create' render={ (props) => (
            <CreatePage {...props}/>
          )} />
        </Switch>
      </div>
    );
  }
}

////////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {
  return {
    currentPage: state.currentPage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: (allPosts) => dispatch(fetchPostsAction(allPosts)),
    dispatch
  }
}

////////////////////////////////////////////////////////////////////////////

export default connect(mapStateToProps, mapDispatchToProps)(App);


////////////////////////////////////////////////////////////////////////////

//             <Route path='/logout' component={logout} />
//              const logout = return < />
//<NavBar {/*handleClick={this.handleClick}*/} />
//import UUID from 'uuid'

// editAJAX = (event) => {
//     event.preventDefault();
//
//     fetch(`http://localhost:3001/api/v1/post/${this.props.post.id}/edit`, {method:"PATCH"})
//     .then(response=>response.json())
//     .then(data=>this.props.updatePostAction(data))
//   }

//Structure///////////////////////////////////////////////////////////////////


// <App />
//   <NavBar />                                         ---DONE
//   <LoggedInUser />
//   <NavBar />                                         ---DONE
//   		Routes: Profile, Explore, Create, Logout        ---DONE
//
//   <UserProfile />
//             <UserInfo />
//   	         <UserMap />
//             <UserPosts />
//                  <Post />                            ---DONE
//            <UserSearch />                            ---DONE
//
//   <Create />
//             <CreateMap />
//             <CreateForm />
//   <Explore />
//             <ExploreSearch />
//   	         <ExploreMap />

//TIDY UP:

//searchbar: make full text appear upon selection
// geolocation on map
// clicke event on marker to render a tile component
// Share Button NavLink
// User profile avatar

// Rails Backend: issues with postgres installment.
//   user: name, location, avatar
//   post: place, image, desription, user_id
//
//   Backend Routes & Serializer
//   Active Storage
//   Auth


// Redux Auth & User Login/Create Account Page. photo upload for avatar.

//Edit functionality for UserPosts
//NavBar photo formatting & fake user posts
