'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Component,
  View,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
} = React;

import * as pageType from './actionTypes';
let HomePage = require('./HomeView');

class MainPageView extends Component {
    
    render(){
       let defaultName = 'FirstPageComponent';
        let defaultComponent = HomePage;
      
        return (
            // <Navigator 
            //   initialRoute={{id:pageType.HOME_PAGE, name:pageType.HOME_PAGE}}
            //   renderScene={this.renderScene.bind(this)}
            //   configureScene={(route) => {
            //   if (route.sceneConfig) {
            //      return route.sceneConfig;
            //   }
            //     return Navigator.SceneConfigs.FloatFromRight;
            //  }}>   
            // </Navigator>
            
         <Navigator
          initialRoute={{ name: defaultName, component: defaultComponent }}
          configureScene={(route) => {
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
           }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }} />
        )
    }
    
    renderScene(route, navigator) {
      var routeId = route.id;
     if (routeId === pageType.HOME_PAGE) {
      return (
        <HomePage
           navigator={navigator} />
      );}
      
    }
    
  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>请在 index.js 的 renderScene 中配置这个页面的路由</Text>
        </TouchableOpacity>
      </View>
    );
  }
    
}

export default MainPageView;