import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, Input, CardSection, Button } from './common';
import * as actions from '../actions';

class EmployeeCreate extends Component {
  onSave() {

  }
  render() {
    return (
        <Card>
          <CardSection>
            <Input
              label='Name'
              placeholder='Jane'
              onChangeText={(text) => { this.props.employeeUpdate({ prop: 'name', value: text }); }}
              value={this.props.name}
            />
          </CardSection>

          <CardSection>
            <Input
              label='Phone'
              placeholder='555-555-5555'
              onChangeText={(text) => this.props.employeeUpdate({ prop: 'phone', value: text })}
              value={this.props.phone}
            />
          </CardSection>

          <CardSection>
            <Text style={styles.pickerLabelStyle}>Shift</Text>
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.props.shift}
              onValueChange={(text) => this.props.employeeUpdate({ prop: 'shift', value: text })}
            >
              <Picker.Item label='Monday' value='Monday' />
              <Picker.Item label='Tuesday' value='Tuesday' />
              <Picker.Item label='Wednesday' value='Wednesday' />
              <Picker.Item label='Thursday' value='Thursday' />
              <Picker.Item label='Friday' value='Friday' />
              <Picker.Item label='Saturday' value='Saturday' />
              <Picker.Item label='Sunday' value='Sunday' />
            </Picker>
          </CardSection>

          <CardSection>
            <Button>{'Create'}</Button>
          </CardSection>
        </Card>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProp = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProp, actions)(EmployeeCreate);
