import React from 'react';
import { View } from 'react-native';

const HomePageSection = (props) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    shadowColor: '#30304D',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.34,
    shadowRadius: 8,
    backgroundColor: 'white',
    marginBottom: 20
  }
};

export default HomePageSection;
