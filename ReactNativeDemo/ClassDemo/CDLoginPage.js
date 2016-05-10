'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Component,
  View,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  CalendarManager,
  Dimensions,
  ListView,
} = React;
import * as pageTypes from './CDActonStype';

var styles = require('./LoginPageCss');
/**
 * 表格数据初始化
*/
var data = [
 { id: 1, text: '布局',
   des: 'view布局视图 ',
   pageype:pageTypes.LIST_VIEW_PAGE,
 },
 {id: 2, text: '弹框',
  des: 'AlertView',
  pageype:pageTypes.ALERT_PAGE,
 },
 { id: 3, text: '表格',
  des: 'ListView',
  pageype:pageTypes.LIST_VIEW_PAGE,
},
 {id: 4, text: '表格刷新',
 des: 'ListView下啦',
 pageype:pageTypes.REFRESH_LIST_VIEW_PAGE,
},
 {id: 5, text: '调用原生地图',
 des: '原生',
 pageype:pageTypes.MAP_PAGE_VIEW_PAGE,
},
 {id: 6, text: '按钮',
 des: 'Button',
 pageype:pageTypes.BUTTON_VIEW_PAGE,
},
 {id: 7, text: 'Picker',
  des: '可以在iOS和Android上渲染原生的选择器（Picker）',
  pageype:pageTypes.PCIK_VIEW_PAGE,
},
 {id: 8, text: 'Tabbar',
 des: 'Tabbar',
 pageype:pageTypes.TABBAR_VIEW_PAGE,
},
 {id: 9, text: '自定义列表',
 des: 'CustomTableview',
 pageype:pageTypes.CUSTOM_LIST_VIEW_PAGE,
},

];


var LoginPage = React.createClass({
  
    getInitialState: function() {
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) =>   r1 !== r2
        });
        return {
            dataSource: ds.cloneWithRows(data),
        };
    },
    
  renderRow(row) {
    return ( 
     <TouchableOpacity onPress={gotoNext.bind(this,this.props.navigator,row)}>
      <View style={styles.row} >
            <Text style={styles.rowTxt} >{row.text}</Text>
             <Text style={styles.desText} >{row.des}</Text>
      </View>
    </TouchableOpacity>
    );
  },
  
   configureScene(route){
      return Navigator.SceneConfigs.FadeAndroid;
    },
 
  //******************
    render() {
        ////////////
        return (
            <Navigator
                renderScene={this.renderScene.bind(this,this.navigator)}
                navigationBar={
                <Navigator.NavigationBar style={{backgroundColor: '#246dd5', alignItems: 'center'}}
                routeMapper={NavigationBarRouteMapper} />
            }/>
        );
        ////////////     
    },
   //****************** 
   
    renderScene(route, navigator) {
        return (
            <View style={styles.container}>
            <ListView
            dataSource={this.state.dataSource}
            // renderRow={(rowData) => <Text>{rowData}</Text>}
            renderRow={this.renderRow}
            /> 
            </View>
        );
      }
});

/**
 * 首页页面跳转
 */ 
function gotoNext(sender,rowData) {
    let name =  rowData.pageype;
    let des =  rowData.des;
    sender.push({
             id: name,
             name: des,          
        });   
} 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 导航条
*/
var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
      return null;
//    return (
//       <View style={styles.nextTextView}>
//          <TouchableHighlight
//             //  onPress={gotoNext.bind(this,navigator.parentNavigator)}>
//             //  onPress={() => navigator.parentNavigator.push({id: 'HomePage'})}>
//             onPress={() => navigator.parentNavigator.push({id: 'HomePage'})}>
//               <Text style={styles.nextFont}>
//                  下一页
//                </Text>
//             </TouchableHighlight>
//       </View>
//     );

  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          列表
        </Text>
      </TouchableOpacity>
    );
  }
};

module.exports = LoginPage;
