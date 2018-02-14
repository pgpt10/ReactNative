import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Header, Button } from './components/common';
import todoApp from './reducers';

class App extends Component {
  componentWillMount() {
    this.store.subscribe(() => {
      console.log('Doneeeeee...!!!!!!!!!!');
    });
  }

  store = createStore(todoApp);

  addTodo() {
    this.store.dispatch({
      type: 'ADD_TODO',
      text: 'Learn React',
      id: 1
    });
  }

  render() {
    return (
        <View>
          <Header headerText={'Todo List'} />
          <Button onPress={this.addTodo}>
            Add a Todo
          </Button>
        </View>
      );
    }
}

export default App;
