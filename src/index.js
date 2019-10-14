import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import store from "../src/redux/store";
import { Provider } from "react-redux";

// import { userActions } from "redux/actions";

// store.dispatch(userActions.fetchUserData());



import './styles/index.scss';



ReactDOM.render( 
<Provider store={store}>
    <Router>
      <App />
    </Router>
</Provider>
, document.getElementById('root'));


