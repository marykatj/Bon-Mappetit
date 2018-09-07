import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducer);
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(<Provider store={store}><Router><App store={store}/></Router></Provider>, document.getElementById('root'));
registerServiceWorker();

//////////////////////////////////////////////////////////////////////////////////

// Rails backend written: need to connect with front end                    -- TODAY
// Need user data to persist  --TODAY
// Need Redux Auth implemented && User profile set up                       -- THUR/FRI
// Map Markers: need to distinguish between User & All.  Mostly set up.     --THUR/FRI
// css                                                                      --Sunday & Monday
// FIX ADDRESSES & SEARCH BAR.
//search bar actually autocompletes.
// savor move.

// user profile with avatar
// geolocation
// carosuel photos


/////////////////////////////////////////////////////////////////////////////////

// componentDidMount() {
//   const config = {
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET',
//       'Access-Control-Allow-Credentials': true,
//       'Access-Control-Allow-Headers': 'Content-Type',
//       'Content-Type': 'application/json'
//     }
// }
//
// const googlePlacesURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.state.exploreSearchBar}&sensor=true&key=AIzaSyD8eyGeIVO1m-lMAwJ21o3qiUPRiuFV_ck`
//
//   fetch(googlePlacesURL, config)
//   .then(response => response.json())
//   .then(data => this.setState({
//     googlePlacesSearch: data
//   }))
// }
