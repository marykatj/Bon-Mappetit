import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './components/NavBar';
import UserPage from './components/Profile/UserPage';
import CreatePage from './components/Create/CreatePage';
import ExplorePage from './components/Explore/ExplorePage';

class App extends Component {


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

////////////////////////////////////////////////////////////////////////////

export default connect(mapStateToProps)(App);

//export default App;

////////////////////////////////////////////////////////////////////////////

//             <Route path='/logout' component={logout} />
//              const logout = return < />
//<NavBar {/*handleClick={this.handleClick}*/} />
//import UUID from 'uuid'

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


// Share Button NavLink

// Rails Backend: issues with postgres installment.
//   user: name, location, avatar
//   post: place, image, desription, user_id
//
//   Backend Routes & Serializer
//   Active Storage
//   Auth

// Map:
//   need markers component
//   need map boundaries to adjust with the search bar


// Redux Auth & User Login/Create Account Page. photo upload for avatar.

//Edit functionality for UserPosts
//NavBar photo formatting & fake user posts



// We would also need to create an axiosClient to ensure that the API base URL
// is pointing to the Rails server. To do that, create a file src/axiosClient.js with the following content:
