import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Heyyyyyy..!!!!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
