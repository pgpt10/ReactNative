import React from 'react';
import { View } from 'react-native';
import HomeCard from './HomeCard';

const HomeCardSection = ({ cards, cityName }) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      {cards.map(card => <HomeCard card={card} cityName={cityName} />)}
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: 'white',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  }
};

export default HomeCardSection;
