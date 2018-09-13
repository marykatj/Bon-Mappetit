import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from './configureStore.js';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
        <App history={history}/>
    </Provider>
  </Router>, document.getElementById('root'));
registerServiceWorker();


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
