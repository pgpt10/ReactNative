import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(`Here are your libraries: ${this.props.data}`);
    return (
      <View />
    );
  }
}

const mapStateToProps = state => ({ data: state.libraries });

export default connect(mapStateToProps)(LibraryList);
