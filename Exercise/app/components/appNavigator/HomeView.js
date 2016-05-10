
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

class MainPageView extends Component {
    
    render(){
        return (
            // <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            // <Text>{2}</Text>
            // </View>
              <Navigator
              renderScene={this.renderScene.bind(this)}
             navigationBar={
                <Navigator.NavigationBar style={{backgroundColor: '#246dd5', alignItems: 'center'}}
                routeMapper={NavigationBarRouteMapper} />
          } />
            
        )
    }
    
  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableHighlight
            onPress={this.gotoNext.bind(this)}>
          <Text style={{color: 'red'}}>下一页</Text>
        </TouchableHighlight>
      </View>
    );
  }
  gotoNext() {
    this.props.navigator.push({
      id: 'MainPage',
      name: '主页',
    });
  }
    
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          登录
        </Text>
      </TouchableOpacity>
    );
  }
};

export default MainPageView;