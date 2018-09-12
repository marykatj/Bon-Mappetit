import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
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

  render() {
    return (
      <div>
        <NavBar />
        <Route path='/profile' component={UserPage}/>
        <Route path='/explore' component={ExplorePage} />
        <Route path="/create" component={CreatePage} />
      </div>
    );
  }
}

//<Route path='/explore' component={ ExplorePage } />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


//Structure///////////////////////////////////////////////////////////////////


// <App />
//   <NavBar />
//   <LoggedInUser />
//   <NavBar />
//   		Routes: Profile, Explore, Create, Logout
//
//   <UserProfile />
//             <UserInfo />
//   	         <UserMap />
//             <UserPosts />
//                  <Post />
//            <UserSearch />
//
//   <Create />
//             <CreateMap />
//             <CreateForm />
//   <Explore />
//             <ExploreSearch />
//   	         <ExploreMap />


//Additional Features//////////////////////////////////////////////////////////

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
