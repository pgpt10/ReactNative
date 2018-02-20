import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Header, Card, CardSection, Input, Button, Spinner } from './common';
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

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={{ color: 'red', fontSize: 20, alignSelf: 'center' }}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size={'large'} />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}> {'Log In'} </Button>;
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

          {this.renderError()}

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading
});

export default connect(mapStateToProps, actions)(LoginForm);
