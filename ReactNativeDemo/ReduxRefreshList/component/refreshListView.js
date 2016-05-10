
'use strict'

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    ListView,
    Dimensions,
    TouchableOpacity,
    PropTypes,
    View
} from 'react-native';

var RefreshableListView = require('react-native-sk-refreshable-listview');
var {width, height} = Dimensions.get('window');
import  ListRowView from './listRow';
import  ListEmptyView from './listEmptyView';
import  ListError from './listError'

var CustomListView = React.createClass({
  
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
      
    let isErrorView = this.props.disableErrorView;
    if(error&&isErrorView){
       //加载错误页面
      return (
         <ListError refresh={refreshAction} />
      )
    }
     let isEmptyView = this.props.disableErrorView;
     if(isEmptyView){
        //加载为空页面
      if(data == undefined||data.length==0){
        return (
              <ListEmptyView refresh={refreshAction} />
      )}
    }
     
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

CustomListView.propTypes={
  /**
	 * 是否禁用表格错误页面
	 */
  disableErrorView:React.PropTypes.bool,
  /**
	 * 是否禁用表格空页面
	 */
  disableEmptyView:React.PropTypes.bool,
}

CustomListView.defaultProps = {
	disableErrorView: true,
	disableEmptyView: false
};

module.exports = CustomListView;
