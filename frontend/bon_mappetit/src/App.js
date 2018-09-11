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

  componentDidMount() {
    fetch(postsAPI).then(response  => response.json())
      .then(data => this.props.fetchPosts(data));
    };

  // fetch(usersAPI)
  //   .then(response  => response.json())
  //   .then(json => console.log(json));
  // });

//////////////////////////////////////////////////////////////////////////////

//Add logout button
//Fix Nav NavLink
//Fix Fetches.                                   ---DONE
//reverse chronilogical order.
// delete Markers feature backend                ---DONE
// search bar actually autocomplete
//picture tiles
// photo header
// reseed & populate
// Fake other user posts.  Define between allPlaces & allUserLocations between pages.

//             <Route path='/logout' component={logout} />
//              const logout = return < />
//<NavBar {/*handleClick={this.handleClick}*/} />


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


//Additional Features//////////////////////////////////////////////////////////

// photo carousel
// edit/delete posts
// gelocation
// Redux Auth
// Upload profile avatar

// editAJAX = (event) => {
//     event.preventDefault();
//
//     fetch(`http://localhost:3001/api/v1/post/${this.props.post.id}/edit`, {method:"PATCH"})
//     .then(response=>response.json())
//     .then(data=>this.props.updatePostAction(data))
//   }
