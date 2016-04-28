
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  JSON,
  View
} from 'react-native';


const cookie = "";

// let url = 'http://op.juhe.cn/onebox/weather/query';

// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded"
//   },
//   body: "cityname=%E5%8C%97%E4%BA%AC&dtype=&key=c7ec013f6984bdbc688ab90fbd927d20"
// }).then(function(response) {
//     response.json().then(function(data) {
//        console.log(data);
//     });
// }, function(e) {
//    alert("Error submitting form!");
// });



// let url = 'https://crm-staging.xiaoshouyi.com/mobile/smart-view/smart-views.action';

// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded"
//   },
//   body: "_vs=4.0&appType=0&appVersion=4.0&belongId=100003628&inhouse=0&os=iPhone%20OS%2C8.1%2CiPhone%20Simulator&source=2"
//   //是否支持Cookie
//   credentials: 'include',
//   setCookie("username");

// }).then(function(response) {
    
//      console.log(response.headers.get('Content-Type')); 
//     console.log(response.headers.get('Date'));

//     response.json().then(function(data) {
//        console.log(data);
//     });
// }, function(e) {
//    alert("Error submitting form!");
// });



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