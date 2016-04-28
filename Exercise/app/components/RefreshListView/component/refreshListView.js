
'use strict'

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    ListView,
    Dimensions,
    TouchableOpacity,
    View
} from 'react-native';

import RefreshableListView from './refreshListTool'
var {width, height} = Dimensions.get('window');
import  ListRowView from './listRow';
import  ListEmptyView from './listEmptyView';
import  ListError from './listError'

var listView = React.createClass({
  //List Cell View
  renderRow(row) {
    return (
         <ListRowView row={row}/>
    );
  },
  //来源数据
  render(){
    const {data,
           isLoadMore,
           customRow,
           error,
           customEmpty,
           refreshAction,
           loadMoreAction,
      } = this.props;
    //加载错误页面
    if(error){
      return (
         <ListError refresh={refreshAction} />
      )}
      
    //加载为空页面
     if(data == undefined||data.length==0){
      return (
             <ListEmptyView refresh={refreshAction} />
     )}
     
    //数据属性格式
   let ListViewDataSource = new ListView.DataSource({
       rowHasChanged: (r1, r2) => r1 !== r2
    });
    
    var showCellView = null;
     if (customRow!=undefined){
       showCellView =  customRow;
     }else{
       showCellView =  this.renderRow;
     }
    //加载List列表
    return (
      <RefreshableListView
        style={styles.container}
        dataSource={ListViewDataSource.cloneWithRows(data)}
        onRefresh={refreshAction}
        onLoadMore={loadMoreAction}
        showLoadMore={isLoadMore}
        renderRow={showCellView}  
      />
    );
   }
});

var styles = {
  container: {
    flex: 1,
    marginTop:20,
    backgroundColor: '#FFF',
  },
};

module.exports = listView;
