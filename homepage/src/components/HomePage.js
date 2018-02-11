import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import HomePageSection from './HomePageSection';
import HomeCardSection from './HomeCardSection';

class HomePage extends Component {
  state = { cards: null, cityName: null };

  componentWillMount() {
    axios.post('http://www.99acres.com/99api/v18/homepagedata/f9099fdde55d381dbb7890b465822f522884466c53168cab4ac0c49faf8f0b9947ba0ead5e8b9bec8925dc9c2c0955b2de67652411d9727719a266a0dd1a5d60b3deb1d2deb851cf140d7b598699d4efa2b2481c996259ce09947cfd4398e064/?rtype=json&source=ios', {
      cityId: '7',
      clientId: '563446679542601310',
    })
    .then(
      response => {
        this.setState({ cards: response.home, cityName: response.cityName });
      }
    )
    .catch(
      () => {
        const tempResponse = { home: [
        {
            bannerTitle: 'TRENDING\nPROJECTS',
            imageURL: 'https://mediacdn.99acres.com//app_banners_new/trending-projects-app-new.jpg',
            clickUrl: '&locality=8232&proptype=APT&bhk=3',
            card_id: '7'
        },
        {
            bannerTitle: 'RERA REGISTERED\nPROJECTS',
            imageURL: 'https://mediacdn.99acres.com//app_banners_new/rera-registered-projects.jpg',
            clickUrl: '&city=7&res_com=R&rerastatus=REGISTERED',
            card_id: '8'
        },
        {
            bannerTitle: 'FEATURED\nPROJECTS',
            imageURL: 'https://mediacdn.99acres.com//app_banners_new/hot-projects-app.jpg',
            clickUrl: '&city=7&res_com=R&npcount=1',
            card_id: '3'
        },
        {
            bannerTitle: 'PROPERTIES\nFOR SALE',
            imageURL: 'https://mediacdn.99acres.com//app_banners_new/properties-for-sale-app.jpg',
            clickUrl: '&res_com=R&Mode=S&city=7',
            card_id: '2'
        },
        {
            bannerTitle: 'PROPERTIES\nFOR RENT',
            imageURL: 'https://mediacdn.99acres.com//app_banners_new/properties-for-rent-app.jpg',
            clickUrl: '&res_com=R&Mode=R&city=7',
            card_id: '1'
        },
        {
            bannerTitle: 'UNDER CONSTRUCTION\nPROJECTS',
            imageURL: 'https://mediacdn.99acres.com//app_banners_new/under-construction-app.jpg',
            clickUrl: '&city=7&res_com=R&np_search_type=NP',
            card_id: '5'
        },
        {
            bannerTitle: 'READY TO MOVE\nPROJECTS',
            imageURL: 'https://mediacdn.99acres.com//app_banners_new/ready-to-move-app.jpg',
            clickUrl: '&city=7&res_com=R&np_search_type=R2M',
            card_id: '6'
        },
        {
            bannerTitle: 'NEW LAUNCH\nPROJECTS',
            imageURL: 'https://mediacdn.99acres.com//app_banners_new/new-launch-app.jpg',
            clickUrl: '&city=7&res_com=R&np_search_type=NL',
            card_id: '4'
        }
    ] };
    this.setState({ cards: tempResponse.home, cityName: 'Noida' });
      }
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
    backgroundColor: '#F5F6FB'
  }
};

export default HomePage;
