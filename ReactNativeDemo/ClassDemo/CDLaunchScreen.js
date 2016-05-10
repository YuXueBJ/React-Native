'use strict';

import * as pageTypes from './CDActonStype';

var React = require('react-native');
var {
  Component,
  View,
  Text,
} = React;

class launchScreen extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: pageTypes.HOME_PAGE,
      });
    }, 1000);
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 32,}}>启动页面</Text>
      </View>
    );
  }
}

module.exports = launchScreen;