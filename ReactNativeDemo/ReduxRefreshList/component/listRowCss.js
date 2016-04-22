
import React, {
    AppRegistry,
    StyleSheet,
    Dimensions,
} from 'react-native';

var {width, height} = Dimensions.get('window');
let contHeight = 85;

var styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    height:contHeight,
  },
  row: {
    height: height / 10,
    width : width,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
   titleFont:{
      marginTop:10,
      height:20,
      marginLeft:15,
      color:'#3B3B3B',
      fontSize:15,
      fontWeight:'bold',
  },
  desFont:{
      marginTop:10,
      height:20,
      marginLeft:15,
      color:'#3B3B3B',
      fontSize:10,
      fontWeight:'bold',
  },
  rowLine:{
      marginBottom:0,
      width:width,
      height:0.5,
      backgroundColor: '#080808',
  }
};

module.exports = styles;