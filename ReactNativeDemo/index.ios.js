/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { AppRegistry } from 'react-native';

// import ListViewModule from './ClassDemo/CDNavgator';
// AppRegistry.registerComponent('ReactNativeDemo', () => ListViewModule);

// import ListViewModule from './LearnDemo/TableView/customListView';
// AppRegistry.registerComponent('ReactNativeDemo', () => ListViewModule);

// import ReduxTodoList from './ReduxRefreshList/containers/app';
// import ReduxCustomCell from './ReduxCustomCell/containers/app';
// AppRegistry.registerComponent('ReactNativeDemo', () => ReduxTodoList);

import Fetch from './Fetch';
AppRegistry.registerComponent('ReactNativeDemo', () => Fetch);
