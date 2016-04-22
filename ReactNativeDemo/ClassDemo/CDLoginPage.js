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

var styles = require('./LoginPageCss');
/**
 * 表格数据初始化
*/
var data = [
 {id: 1, text: '布局',         des: 'view布局视图'},
 {id: 2, text: '弹框',         des: 'AlertView'},
 {id: 3, text: '表格',         des: 'ListView'},
 {id: 4, text: '表格刷新',      des: 'ListView下啦'},
 {id: 5, text: '调用原生地图',   des: '原生'},
 {id: 7, text: '按钮',          des: 'Button'},
 {id: 6, text: 'Picker',       des: '可以在iOS和Android上渲染原生的选择器（Picker）'},
 {id: 8, text: 'Tabbar',       des: 'Tabbar'},
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
    
       if (rowData.id==1) {
           navPuspage(sender,'RowViewPage','布局');
       }else if(rowData.text=='Picker'){
           navPuspage(sender,'pickerViewPage','picker');
       }else if(rowData.text == '表格刷新'){
           navPuspage(sender,'RefreshableTableView','下拉表格')
       }else if(rowData.text == '按钮'){
             navPuspage(sender,'ButtonView','按钮')
       }else if(rowData.text = 'Tabbar'){
            navPuspage(sender,'TabbarViewPage','TabBar')
       }
       else{
           navPuspage(sender,'HomePage','主页');
       }
} 

function navPuspage(sender,pageID,pageName) {
         sender.push({
             id: pageID,
             name: pageName,          
              //页面弹起
             //    sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
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
