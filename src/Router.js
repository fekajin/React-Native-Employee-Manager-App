/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene 
                    key="login" 
                    component={LoginForm} 
                    title="pls login or create new account" initial 
                    />
                </Scene>
                <Scene key="main">
                    <Scene
                        rightTitle="Add"
                        onRight={() => Actions.employeeCreate()}
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        initial
                    />
                </Scene>
                <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
                <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
