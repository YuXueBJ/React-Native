'user strict'

import React,{Component,View,Text} from 'react-native';

const {Provider} = require('react-redux');

import store from '../store/store';

import Customapp from './customapp';

export default class customapp extends Component {
    render(){
        return(
            <Provider store = {store}>
            <Customapp />
            </Provider>
        );
    }
    
}