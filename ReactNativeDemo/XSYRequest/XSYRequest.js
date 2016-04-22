


import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var {
    XSYRequest,UserDefaults
} = require('NativeModules');

import api from './RequestURL.js';

let  feedPram = {
    'source':'2',
    'prePageLastId':'0',
    'size':'25',
    'start':'0'
};

function request (url) {
    
    XSYRequest.get(api.getPackUrl,null,function (response){
        
        if(response.scode == '0'){
            console.log(response);
        }
        
    },function (failRes) {
        console.log(failRes);
    });
}
request();

 class ingageplatform extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
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

module.exports = ingageplatform;