import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCDB0QxK8LIODl5MFSNTjfvPsmBsFXEVSI',
      authDomain: 'auth-1d2b9.firebaseapp.com',
      databaseURL: 'https://auth-1d2b9.firebaseio.com',
      projectId: 'auth-1d2b9',
      storageBucket: 'auth-1d2b9.appspot.com',
      messagingSenderId: '449259735460'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return <Button> Log Out </Button>;
    }
    return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
