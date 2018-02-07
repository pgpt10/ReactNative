import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCDB0QxK8LIODl5MFSNTjfvPsmBsFXEVSI',
      authDomain: 'auth-1d2b9.firebaseapp.com',
      databaseURL: 'https://auth-1d2b9.firebaseio.com',
      projectId: 'auth-1d2b9',
      storageBucket: 'auth-1d2b9.appspot.com',
      messagingSenderId: '449259735460'
    });
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
