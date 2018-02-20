import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBbHr_nbv1J-6v3PH5LQbKZ4wDhs46bHZY',
      authDomain: 'manager-a553c.firebaseapp.com',
      databaseURL: 'https://manager-a553c.firebaseio.com',
      projectId: 'manager-a553c',
      storageBucket: 'manager-a553c.appspot.com',
      messagingSenderId: '225642446573'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
