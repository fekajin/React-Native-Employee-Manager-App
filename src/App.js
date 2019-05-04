/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
    componentDidMount() {
        const config = {
            apiKey: 'AIzaSyCtP3Qgi9bYb4212ufTM97zuktSUTnTNZM',
            authDomain: 'manager-a877a.firebaseapp.com',
            databaseURL: 'https://manager-a877a.firebaseio.com',
            projectId: 'manager-a877a',
            storageBucket: 'manager-a877a.appspot.com',
            messagingSenderId: '252484773091'
        };

        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}


export default App;
