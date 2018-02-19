import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Header, Card, CardSection, Input, Button } from './common';
import * as actions from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    this.props.loginUser(this.props.email, this.props.password);
  }

  render() {
    return (
      <View>
        <Header headerText={'Login Form'} />
        <Card>
          <CardSection>
            <Input
              label={'Email'}
              placeholder={'example@domain.com'}
              value={this.props.email}
              onChangeText={this.onEmailChange.bind(this)}
            />
          </CardSection>

          <CardSection>
            <Input
              label={'Password'}
              placeholder={'password'}
              value={this.props.password}
              onChangeText={this.onPasswordChange.bind(this)}
              secureTextEntry
            />
          </CardSection>

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}> {'Log In'} </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({ email: state.auth.email, password: state.auth.password });

export default connect(mapStateToProps, actions)(LoginForm);
