import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from './reducer';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducer);
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


ReactDOM.render(<Provider store={store}><Router><App store={store}/></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
