/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict'; 
/**
 * 
这行代码是用于开启 Strict Mode，Strict mode的错误处理可以有所提高，
JavaScript的一些语言缺陷也可以避免。
简而言之就是，
JavaScript在这种模式下工作地更好！
*/ 
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

// var requestPage = require('request');

class ReactNativeDemo extends Component {

  render() {
      var ad = "da";

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit request.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to 11111,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);