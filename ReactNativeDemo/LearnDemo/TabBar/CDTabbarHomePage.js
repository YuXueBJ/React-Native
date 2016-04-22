'use strict';

import React, {Image, Dimensions,AppRegistry, Component,StyleSheet,Text,View} from 'react-native';

var {width, height} = Dimensions.get('window');

export default class HomePage extends Component {
  
    render(){
        return (
          <View style = {styles.backViewsType}>
 
          </View>
        )
    }
};
const styles = StyleSheet.create({
    
   backViewsType:{
        backgroundColor:'#9370DB',
        flex:1, 
        width:width,
        height:height,
   },
 
});

module.exports = HomePage;