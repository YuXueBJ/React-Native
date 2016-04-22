'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  ListView,
  Image,
  StyleSheet,
  TouchableHighlight,
  View
} = React;
var styles = require('../TableView/ListStyle');

var REQUEST_URL = 'http://platform.sina.com.cn/sports_all/client_api?app_key=3571367214&_sport_t_=football&_sport_s_=opta&_sport_a_=teamOrder&type=213&season=2015&format=json';

var listView = React.createClass({
  
  //在组件挂载之前调用一次。返回值将会作为 this.state 的初始值。
  getInitialState: function() {
        return {
            // teams: null,
           dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2,
            }),
          loaded: false,
        };
    },

/*
在初始化渲染执行之后立刻调用一次，仅客户端有效（服务器端不会调用）。在生命周期中的这个时间点，组件拥有一个 DOM 展现，你可以通过 this.getDOMNode() 来获取相应 DOM 节点。
*/   
  componentDidMount: function() {
        this.fetchData();
    },
/* 方法是必须的。*/
   render: function() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        
        // var team = this.state.teams[11];
        //     return this.renderTeam(team);
        
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderTeam}
                style={styles.listViewstyle}
                />
          );
    },
    
// 网络请求
//  statics: {
    fetchData: function() {
        fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                // teams: responseData.result.data,
                  dataSource: this.state.dataSource.cloneWithRows(responseData.result.data),
                 loaded: true,
            });
        })
        .done();
    // }
 },

 renderLoadingView: function() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading teams...
                </Text>
            </View> 
        );
    },
  renderTeam: function(team) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: team.logo}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.name}>{team.team_cn}</Text>
                    <Text style={styles.rank}>{team.team_order}</Text>
                </View>
            </View>
        );
    }
  
});

module.exports = listView;