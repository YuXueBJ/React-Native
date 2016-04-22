'use strict'


var React = require('react-native');
var {
  StyleSheet,
  Dimensions,

} = React;

var {width, height} = Dimensions.get('window');


 var styles = StyleSheet.create({
     
     nextFont:{
        color:'#fff',
        fontSize:14,
        flex:1, 
        marginRight:15,
    },
    nextTextView:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    navigationBarStyle:{
        backgroundColor: '#246dd5', 
        alignItems: 'center'
    },  
  container: {
     marginTop:65,
     backgroundColor:'#FFFFFF',
     flex:1, 
},
 row: {
    padding: 15,
    height: 65,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
  rowTxt: {
        color:'#515151',
        fontSize:14,
        flex:1, 
        marginRight:15, 
  },
  desText:{
        color:'#515151',
        fontSize:14,
        flex:1, 
        marginRight:15, 
  }
});
 
module.exports = styles;