import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';

import UserPage from './components/Profile/UserPage';
import CreatePage from './components/Create/CreatePage';
import ExplorePage from './components/Explore/ExplorePage';
import GoogleMap from './components/GoogleMap'


// const API_URL = `...`
// const PROXY_URL = `...`

class App extends Component {

//API FETCH HERE
//adaptor optional
//MapAdapter.getMaps().then(url => this.props.fetchMaps(url))

//////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/profile' render={ () => (
            <UserPage />
          )} />
          <Route path='/create' render={ () => (
            <CreatePage />
          )} />
          <Route path='/' component={ ExplorePage } />
        </Switch>
      </div>
    );
  }
}

export default App;

//////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {
  return {
    currentPage: state.currentPage
  }
}

////////////////////////////////////////////////////////////////////////////

//             <Route path='/logout' component={logout} />
//              const logout = return < />
//<NavBar {/*handleClick={this.handleClick}*/} />
//import UUID from 'uuid'

//Structure///////////////////////////////////////////////////////////////////


// <App />
//   <NavBar />                                          ----DONE
//   <LoggedInUser />
//   <NavBar />
//   		Routes: Profile, Explore, Create, Logout          ---- DONE
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
//            <CreateSearch />
//   <Explore />
//             <ExploreSearch />
//   	         <ExploreMap />
