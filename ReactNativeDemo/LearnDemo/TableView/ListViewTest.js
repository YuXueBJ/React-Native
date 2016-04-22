'use strict';

// import React, {
//   AppRegistry,
//   Component,
//   StyleSheet,
//   Text,
//   ListView,
//   View
// } from 'react-native';

var React = require('react-native');
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Dimensions,
  ListView,
  TouchableOpacity,
  Alert,
　Navigator,
  View
} = React;

var {width, height} = Dimensions.get('window');

var data = [
 {id: 1, text: '布局',des: 'xxxx'},
 {id: 2, text: '弹框',des: 'xxxx'},
 {id: 3, text: '表格',des: 'xxxx'},
 {id: 4, text: '表格下拉',des: 'xxxx'},
 {id: 5, text: '调用原生地图',des: 'xxxx'},
];

var listView = React.createClass({
  
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
     <TouchableOpacity onPress={(this.appendEvent.bind(this,row))}>
      <View style={styles.row} >
            <Text>{row.text}</Text>
      </View>
    </TouchableOpacity>
    );
  },
  
   configureScene(route){
      return Navigator.SceneConfigs.FadeAndroid;
    },
  
   appendEvent: function(eventName) {
       
       if (eventName.id==1) {
           
       }else if(eventName.id==5){
         <Navigator
    initialRoute={{name: 'My First Scene', index: 0}}
    renderScene={(route, navigator) =>
      <RCTMapManager
        name={route.name}
        onForward={() => {
          var nextIndex = route.index + 1;
          navigator.push({
            name: 'Scene ' + nextIndex,
            index: nextIndex,
          });
        }}
        onBack={() => {
          if (route.index > 0) {
            navigator.pop();
          }
        }}
      />
    }
  />
       }
       else{
            Alert.alert(eventName.text,'121321',
        [
           {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
            {text: 'OK', onPress: () => alert('ok')},
        ]);  
       }
  },
  
    render() {
        return (
            <View style={styles.container}>
                    <ListView
                    dataSource={this.state.dataSource}
                    // renderRow={(rowData) => <Text>{rowData}</Text>}
                      renderRow={this.renderRow}
                    /> 
            </View>
        );
    },
});

const styles = StyleSheet.create({
container: {
    marginTop:20,
    backgroundColor:'#E0E0E0',
    flex:1, 
},
 row: {
    marginTop:20,
    padding: 20,
    height: height / 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },

});

module.exports = listView;