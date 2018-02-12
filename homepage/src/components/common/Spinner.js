import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Spinner = ({ size }) => {
  const { containerStyle } = styles;
  return (
      <View style={containerStyle}>
        <ActivityIndicator size={size || 'large'} />
      </View>
    );
};

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
};

export default Spinner;
