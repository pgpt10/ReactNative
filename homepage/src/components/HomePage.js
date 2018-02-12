import React, { Component } from 'react';
import { ScrollView, Alert } from 'react-native';
import axios from 'axios';
import FormData from 'form-data';
import HomePageSection from './HomePageSection';
import HomeCardSection from './HomeCardSection';
import Spinner from './common/Spinner';

class HomePage extends Component {
  state = { cards: null, cityName: null };

  componentWillMount() {
    const params = new FormData();
    params.append('cityId', '7');
    params.append('clientId', '563446679542601310');
    axios({
      method: 'post',
      url: '/homepagedata/f9099fdde55d381dbb7890b465822f522884466c53168cab4ac0c49faf8f0b9947ba0ead5e8b9bec8925dc9c2c0955b2de67652411d9727719a266a0dd1a5d60b3deb1d2deb851cf140d7b598699d4efa2b2481c996259ce09947cfd4398e064/',
      baseURL: 'http://www.99acres.com/99api/v18',
      params: {
        rtype: 'json',
        source: 'ios',
      },
      data: params
    })
    .then(
      response => {
        console.log(response);
        this.setState({ cards: response.data.home, cityName: response.data.CityName });
      }
    )
    .catch(
      (error) => Alert.alert(`Request Failed: ${error.message}`)
    );
  }

  renderCardsSection() {
    if (this.state.cards) {
      return (
        <HomePageSection>
          <HomeCardSection cards={this.state.cards} cityName={this.state.cityName} />
        </HomePageSection>
      );
    }
    return <Spinner size={'large'} />;
  }

  render() {
    return (
      <ScrollView style={styles.containerStyle} showsVerticalScrollIndicator={false}>

        {this.renderCardsSection()}

      </ScrollView>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#F5F6FB',
  }
};

export default HomePage;
