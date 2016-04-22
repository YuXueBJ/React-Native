'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Component,
  Text,
  View,
  Navigator,
  TouchableOpacity
} = React;

var CDLaunchScreen = require('./CDLaunchScreen');
var CDLoginPage    = require('./CDLoginPage');
var CDMainPage     = require('./CDMainPage');
var CalendarManager = require('react-native').NativeModules.CalendarManager;
 CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey')
var RowViewPage   = require('../LearnDemo/RowView');
var PickViewPage   = require('../LearnDemo/PickerView');
var RefreshableListview = require ('../LearnDemo/TableView/refreshableListview');
var ButtonView   = require('../LearnDemo/CDButton');
var TabbarView   = require('../LearnDemo/TabBar/CDTabbarView');


 var a = 2;
 var b = a;
 var c = a*b;
 CalendarManager.addNumber(a);
 CalendarManager.addNumber(b);
 CalendarManager.addNumber(c);

class demoAPP extends Component {
    
  render(){
    return (
      <Navigator 
            initialRoute = {{id:'CDLaunchScreen',name:'Index'}}
            renderScene = {this.renderScene.bind(this)}
            configureScene = {(route)=>{
                if(route.sceneConfig){
                    return route.sceneConfig;
                }
                return Navigator.SceneConfigs.FloatFromRight;
            }}
           />
        );
    }
    
    renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'CDLaunchScreen') {
      return (
        <CDLaunchScreen
          navigator={navigator} />
      );
    }
    if (routeId === 'CDLoginPage') {//列表
      return (
        <CDLoginPage
          navigator={navigator} />
      );
    }
    if (routeId === 'HomePage') {//弹框
      return (
        <CDMainPage
            navigator={navigator} />
      );
    }
    if(routeId === 'RowViewPage')//表格
    {
       return (
        <RowViewPage
            navigator={navigator} />
      );
    }
    if (routeId === 'RefreshableTableView') { //表格下拉
      return (
        <RefreshableListview
          navigator={navigator} />
      );
    }
    if (routeId === 'NoNavigatorPage') {//地图
      return (
        <NoNavigatorPage
            navigator={navigator} />
      );
    }
    if(routeId == 'pickerViewPage'){//pickerView
        return (
          <PickViewPage
          navigator = {navigator}/>  
        );
    } if(routeId == 'ButtonView'){//Button
        return (
          <ButtonView
          navigator = {navigator}/>  
        );
    }if(routeId == 'TabbarViewPage')//TabbarView
    {
        return (
          <TabbarView
          navigator = {navigator}/>  
        );
    }
    return this.noRoute(navigator);

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

var styles = StyleSheet.create({
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

module.exports = demoAPP;