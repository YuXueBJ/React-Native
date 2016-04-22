'use strict'; 

var React = require('react-native');
var {
    StyleSheet,
    Component,
    View,
    PickerIOS,
    Picker,
    Navigator,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    Dimensions,
    AppRegistry
} = React;

var {width, height} = Dimensions.get('window');

function createDateData(){
	let date = {};
	for(let i=1950;i<2050;i++){
		let month = {};
		for(let j = 1;j<13;j++){
			let day = [];
			if(j === 2){
				for(let k=1;k<29;k++){
					day.push(k+'日');
				}
			}
			else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
				for(let k=1;k<32;k++){
					day.push(k+'日');
				}
			}
			else{
				for(let k=1;k<31;k++){
					day.push(k+'日');
				}
			}
			month[j+'月'] = day;
		}
		date[i+'年'] = month;
	}
	return date;
};

class pickerView extends Component{
 
   render(){
       return(
            <Navigator
                renderScene={this.pickButtonView.bind(this,this.Navigator)}
                navigator={this.props.navigator}
                navigationBar={
                    <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
                        routeMapper={NavigationBarRouteMapper} />
                }/>
       );       
   }
   
   pickButtonView(route, navigator){
       return(
       
         <View  style={styles.center}>
				<Picker
					ref={picker => this.picker = picker}
					style={{height: 260}}
					showMask={true}
					showDuration={300}
					pickerData={createDateData()}
					selectedValue={['2015年', '12月', '12日']}
					onPickerDone={(pickedValue) => {
						console.log(pickedValue);
					}}
				/>
			</View>
         
            // <View style = {styles.center}>
            //   <TouchableHighlight
            //      onPress={this.PickerTest()}>
            //      <Text style = {styles.desText}>  pcikView </Text>
            //       </TouchableHighlight>
            // </View>
       );
   }

PickerTest(){
    return(   
        <View  style={{height: height}}>
				<Picker
					ref={picker => this.picker = picker}
					style={{height: 260}}
					showMask={true}
					showDuration={300}
					pickerData={createDateData()}
					selectedValue={['2015年', '12月', '12日']}
					onPickerDone={(pickedValue) => {
						console.log(pickedValue);
					}}
				/>
			</View>
    );
}   

   
}





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
          pickView
        </Text>
      </TouchableOpacity>
    );
  }
};

 var styles = StyleSheet.create({
   center:{
      marginTop:85,
      marginLeft:5,
      marginRight:5,
      height:100,
    //   width:width/2,
      flexDirection:'row',
      borderRadius:5,
      padding:2,
      backgroundColor:'#FF0067',
    },
    container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
    desText:{
        color:'#FFFFFF',
        fontSize:14,
        flex:1, 
        marginRight:15, 
     }
});

module.exports = pickerView;