import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Celal"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="+905554441122"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.PickerTextStyle}>Shift</Text>
                    <Picker 
                      selectedValue={this.props.shift}
                      onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Pazartesi" value="Monday" />
                        <Picker.Item label="Salı" value="Tuesday" />
                        <Picker.Item label="Çarşamba" value="Wednesday" />
                        <Picker.Item label="Perşembe" value="Thursday" />
                        <Picker.Item label="Cuma" value="Friday" />
                        <Picker.Item label="Cumartesi" value="Saturday" />
                        <Picker.Item label="Pazar" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    PickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        borderColor: 'gray',
        padding: 5,
        borderBottomWidth: 0.3
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
