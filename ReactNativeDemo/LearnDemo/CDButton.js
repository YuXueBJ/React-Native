
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
  Image,
} = React;

var Button = require('react-native-button');
var React = require('react-native');
var {width, height} = Dimensions.get('window');


var ExampleComponent = React.createClass({
  render() {
    return (
        
         <Navigator
          renderScene={this.ButtonView.bind(this,this.Navigator)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
                routeMapper={NavigationBarRouteMapper} />
          }/>
    );
  },

  _handlePress(event) {
    console.log('Pressed!');
  },
  
  ButtonView(route, navigator) {
        return (
            <View style = {styles.backViewCss}>
                 <Button
                        style={[styles.buttonCss,,styles.flex]}
                        styleDisabled={styles.buttonDisabledCss}
                        onPress={this._handlePress}>
                            Press Me!
                    </Button>
            </View>

        );
      }
  
});


var BackImage   = require('../Image/navBackImage.png');

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
        <View style={{flex:1}}>
          <TouchableHighlight
              onPress={() => navigator.parentNavigator.pop()}>
             <Image source={BackImage} style={{width: 40, height: 40}}/>
           </TouchableHighlight>
        </View>
    );
  },
  RightButton(route, navigator, index, navState) {
      return null;
  },
  
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          按钮
        </Text>
      </TouchableOpacity>
    );
  }
};

var styles = StyleSheet.create({
    backViewCss: {
        marginTop:20,
        backgroundColor:'#FFEBCD',
        flex:1, 
        width:width,
        height:height,
    },
    buttonCss:{
  
        marginTop:100,
        backgroundColor:'#8EE5EE',
        width:75,
        height:35,
        marginLeft:(width-75)/2,
        
        flexDirection:'row',
        borderRadius:25,
        padding:2,
        
        fontSize: 12, 
        textAlign: 'center',
        color: '#FFFFFF',
    },
    text:{
       color:'#fff',
       fontSize:12,
       fontWeight:'bold',
    },
     flex:{
        flex:1, 
    },
    buttonDisabledCss:{
        color: 'red',
    }
});
 
module.exports = ExampleComponent;