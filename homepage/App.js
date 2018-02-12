import React from 'react';
import { View } from 'react-native';
import HomePage from './src/components/HomePage';
import Header from './src/components/common/Header';

const App = () => (
      <View>
        <Header headerText={'99acres'} />
        <HomePage />
      </View>
    );

export default App;
