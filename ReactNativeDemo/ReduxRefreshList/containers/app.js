'use strict';

import React, {Component, View, Text} from 'react-native';
const { Provider } = require('react-redux')
import store from '../store/store';
import ListApp from './listApp';

export default class App extends Component {
  render() { 
    return (
       <Provider store={store}>
        <ListApp />
      </Provider>
    );
  }
}

   