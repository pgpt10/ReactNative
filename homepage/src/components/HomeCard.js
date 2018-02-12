import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

const HomeCard = ({ card, cityName }) => {
  const {
    containerStyle,
    innerViewStyle,
    titleTextStyle,
    cityTextStyle,
    copyrightTextStyle,
    imageStyle } = styles;

  return (
    <TouchableOpacity onPress={() => console.log(card.clickUrl)} style={containerStyle}>
      <ImageBackground source={{ uri: card.imageURL }} style={imageStyle}>
        <View style={innerViewStyle}>
          <Text style={titleTextStyle}>{card.bannerTitle}</Text>
          <Text style={cityTextStyle}>{cityName}</Text>
        </View>
        <Text style={copyrightTextStyle}>
          { card.card_id === '7' ? 'Based on 99acres data' : ''}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: '#16A085',
    borderRadius: 2,
    marginBottom: 10,
    shadowColor: '#D2E0E9',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.34,
    shadowRadius: 1
  },

  innerViewStyle: {
    borderColor: 'white',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 1,
    marginTop: 35,
    marginLeft: 20,
    marginRight: 20
  },

  titleTextStyle: {
    marginTop: 5,
    marginBottom: 5,
    color: 'white',
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1
  },

  cityTextStyle: {
    marginTop: 5,
    marginBottom: 5,
    color: 'white',
    fontSize: 12,
    fontFamily: 'OpenSans-Semibold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1
  },

  copyrightTextStyle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 12,
    marginBottom: 8,
    color: 'white',
    fontSize: 10,
    fontFamily: 'OpenSans',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1
  },

  imageStyle: {
    flex: 1,
    borderRadius: 2
  }
};

export default HomeCard;
