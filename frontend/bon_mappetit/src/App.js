import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Explore from './components/Explore/ExplorePage';
import { Switch, Route } from 'react-router-dom';
import UserPage from './components/Profile/UserPage';
import CreatePage from './components/Create/CreatePage';
import ExplorePage from './components/Explore/ExplorePage';

// const API_URL = `...`
// const PROXY_URL = `...`

class App extends Component {

//API FETCH HERE
//adaptor optional
//MapAdapter.getMaps().then(url => this.props.fetchMaps(url))

//////////////////////////////////////////////////////////////////////////////
 currentPage = () => {
   console.log(this)
   switch(this.props.currentPage) {   //pass state.currentPage here.  Need to get props.
     case 'profile':
     console.log("profile")
       return <UserPage />;
     case 'create':
      console.log("create")
       return <CreatePage />;
     case 'explore':
      console.log("explore")
       return <ExplorePage />;
   }
}


//////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div>
        <NavBar />
        {this.currentPage()}
        <Switch>
          <Route path='/' component={ ExplorePage } />
          <Route path='/profile' component={ UserPage } />
          <Route path='/create' component={ CreatePage } />
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

////////////////////////////////////////////////////////////////////////////////

// function mapStateToProps(state) {
//   return {
//     currentPage: state.currentPage
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     fetchMaps: (page) => dispatch(changePageAction(page)),
//     dispatch
//   }    ...check mike's lecture notes!
// }

//export default connect(mapStateToProps, mapDispatchToProps)(App);

////////////////////////////////////////////////////////////////////////////

//             <Route path='/logout' component={logout} />
//              const logout = return < />
//<NavBar {/*handleClick={this.handleClick}*/} />
//import UUID from 'uuid'

//Structure///////////////////////////////////////////////////////////////////


// <App />
//   <NavBar />
//   <LoggedInUser />
//   <NavBar />
//   		Routes: Profile, Explore(Home … geolocation map), Create, Logout
//
//   <UserProfile />
//             <UserInfo />
//   	         <UserMap />
//             <UserPosts />
//            <UserSearch />
//
//   <Create />
//             <CreateMap />
//             <CreateForm />
//            <CreateSearch />
//   <Explore />
//             <ExploreSearch />
//   	         <ExploreMap />
