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

import * as pageTypes from './CDActonStype';

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

import ReduxTodoList from '../ReduxRefreshList';


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
            initialRoute = {{id:pageTypes.LAUNCH_SCREEN_PAGE,name:'Index'}}
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
    if (routeId === pageTypes.LAUNCH_SCREEN_PAGE) {
      return (
        <CDLaunchScreen
          navigator={navigator} />
      );
    }
    if (routeId === pageTypes.HOME_PAGE) {//列表
      return (
        <CDLoginPage
          navigator={navigator} />
      );
    }
    if (routeId === pageTypes.ALERT_PAGE) {//弹框
      return (
        <CDMainPage
            navigator={navigator} />
      );
    }
    if(routeId === pageTypes.LIST_VIEW_PAGE)//表格
    {
       return (
        <RowViewPage
            navigator={navigator} />
      );
    }
    if (routeId === pageTypes.REFRESH_LIST_VIEW_PAGE) { //表格下拉
      return (
        <RefreshableListview
          navigator={navigator} />
      );
    }
    if (routeId === pageTypes.MAP_PAGE_VIEW_PAGE) {//地图
      return (
        <NoNavigatorPage
            navigator={navigator} />
      );
    }
    if(routeId == pageTypes.PCIK_VIEW_PAGE){//pickerView
        return (
          <PickViewPage
          navigator = {navigator}/>  
        );
    } if(routeId == pageTypes.BUTTON_VIEW_PAGE){//Button
        return (
          <ButtonView
          navigator = {navigator}/>  
        );
    }if(routeId == pageTypes.TABBAR_VIEW_PAGE)//TabbarView
    {
        return (
          <TabbarView
          navigator = {navigator}/>  
        );
    }
    if(routeId == pageTypes.CUSTOM_LIST_VIEW_PAGE)//自定义表格
    {
        return (
          <ReduxTodoList
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