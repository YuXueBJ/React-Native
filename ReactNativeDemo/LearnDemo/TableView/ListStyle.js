'use strict'


var React = require('react-native');
var {
  StyleSheet,
} = React;
 
var styles = StyleSheet.create({
    container: {
        marginTop:20,
        // backgroundColor:'#FF0067',
        flex:1, 
    },
    rightContainer:{
       backgroundColor:'#9999cc', 
    },
    listViewstyle: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    name:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
    },
    rank:{
        color:'#fff',
        fontSize:14,
    },
    thumbnail:{
       marginLeft:5,
       height:60,
       width:60,
       flexDirection:'row',
       borderRadius:5,
    },
});
 
module.exports = styles;