
'use strict'

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    ListView,
     Dimensions,
    View
} from 'react-native';

var RefreshableListView = require('react-native-sk-refreshable-listview');
var {width, height} = Dimensions.get('window');

var refresData = [
    {id: 1, text: 'row 1'},
    {id: 2, text: 'row 2'},
    {id: 3, text: 'row 3'},
    {id: 4, text: 'row 4'},
    {id: 5, text: 'row 5'},
    {id: 6, text: 'row 6'},
    {id: 7, text: 'row 7'},
    {id: 8, text: 'row 8'},
    {id: 9, text: 'row 9'},
    {id: 10, text: 'row 10'}, 
];

var loadMoreData = [
    {id: 11, text: 'loadMore 1'},
    {id: 12, text: 'loadMore 2'},
    {id: 13, text: 'loadMore 3'},
    {id: 14, text: 'loadMore 4'},
    {id: 15, text: 'loadMore 5'},
    {id: 16, text: 'loadMore 6'},
    {id: 17, text: 'loadMore 7'},
    {id: 18, text: 'loadMore 8'},
    {id: 19, text: 'loadMore 9'},
    {id: 20, text: 'loadMore 10'}, 
];

function  requestNetData(url) {
     return new Promise((resolve, reject) =>{
          setTimeout(() => {
            resolve(refresData);
            console.log("对象的值为：",refresData);
        }, 1000)
     });
}

function  requestMoreNetData(url) {
     return new Promise((resolve, reject) =>{
          setTimeout(() => {
            resolve(loadMoreData);
            console.log("对象的值为：",loadMoreData);
        }, 1000)
     });
}


var styles = {
  emptyBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyTxt: {
    fontSize: 23,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    marginTop:20,
    backgroundColor: '#FFF',
  },
  row: {
    padding: 10,
    height: height / 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
};

var listView = React.createClass({
  getInitialState() {
     return {
       dataSource : new RefreshableListView.DataSource({rowHasChanged : (row1, row2) =>  row1 !== row2}),
     }
   },
   componentDidMount() {
     this.refreshAction(null);
   },
   
  // get all rows of dataSource
  getRows() {
     var result = this.state.dataSource && this.state.dataSource._dataBlob && this.state.dataSource._dataBlob.s1;
     return result ? result : [];
  },
  // whether no row in dataSource
  isEmpty(){
    return this.getRows().length == 0;
  },
  
  renderRow(row) {
    return (
      <View style={styles.row} >
        <Text>{row.text}</Text>
      </View>
    );
  },
    
  refreshAction(){
      this.nextPage = 1; 
      return requestNetData(null)
      .then((result) => {
          // set rows of dataSource
          var newRows = result;
          var newDataSource = this.state.dataSource.cloneWithRows(newRows);
          this.setState({
           dataSource: newDataSource,
         });
         this.nextPage++;
       }).catch((e)=>{
         console.log(e);
      });
  },
  loadMoreAction(){
       return requestMoreNetData(null)
       .then((result) => {
        // add new rows into dataSource
         var newRows = this.getRows().concat(result);
         var newDataSource = this.state.dataSource.cloneWithRows(newRows);
         this.setState({
           dataSource: newDataSource,
         });
         this.nextPage++;
       }).catch((e)=>{
         console.log(e);
       });
      
  },
    
   render(){  
     if(this.isEmpty()){
         
      return (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyTxt}>{'Please pull down to fresh data, \n pull up to load more data'}</Text>
        </View>
      )
    }
    return (
      <RefreshableListView
        style={styles.container}
        dataSource={this.state.dataSource} // set dataSource
        onRefresh={() => this.refreshAction()} // callback to refresh data (load first page of data), which should return a Promise, I use this promise to tell when to stop loading (render loading view).
        onLoadMore={() => this.loadMoreAction()} // callback to load more data (load next page of data), which should return a Promise, I use this promise to tell when to stop loading (render loading view)
        showLoadMore={true}
        renderRow={this.renderRow}
      />
    );
   }
    
});


module.exports = listView;