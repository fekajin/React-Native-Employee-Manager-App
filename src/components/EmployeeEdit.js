import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { CardSection, Card, Button, Confirm } from './common';

class EmployeeEdit extends Component {
    state = { showModal: false };

    componentDidMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onSaveButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextButtonPress() {
        const { phone, shift } = this.props;

        // eslint-disable-next-line import/no-named-as-default-member
        Communications.textWithoutEncoding(phone, `Your Upcoming Shift İs on ${shift}`);
    }

    onAccept() {
        const { uid } = this.props.employee;
        this.props.employeeDelete({ uid });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onSaveButtonPress.bind(this)}>
                        Save
                    </Button>
                </CardSection>

                <CardSection onPress={this.onTextButtonPress.bind(this)}>
                    <Button>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Fire Employee
                    </Button>
                </CardSection>
                
                <Confirm
                  visible={this.state.showModal}
                  onAccept={this.onAccept.bind(this)}
                  onDecline={this.onDecline.bind(this)}
                > Are You Sure?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    employeeUpdate, employeeSave, employeeDelete
})(EmployeeEdit);
