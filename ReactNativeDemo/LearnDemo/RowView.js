
/**
 * Created by 朱洪伟 on 16/3/21.
 * https://www.zhwios.com
 */

'use strict'; 
/**
 * 
这行代码是用于开启 Strict Mode，Strict mode的错误处理可以有所提高，
JavaScript的一些语言缺陷也可以避免。
简而言之就是，
JavaScript在这种模式下工作地更好！
*/ 
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

var {width, height} = Dimensions.get('window');

class RowViewPage extends Component{
// var RowViewPage = React.createClass({
/*
render() 方法是必须的。

当调用的时候，会检测 this.props 和 this.state，返回一个单子级组件。该子级组件可以是虚拟的本地 DOM 组件（比如 <div /> 或者 React.DOM.div()），也可以是自定义的复合组件。

你也可以返回 null 或者 false 来表明不需要渲染任何东西。实际上，React 渲染一个 <noscript> 标签来处理当前的差异检查逻辑。当返回 null 或者 false 的时候，this.getDOMNode() 将返回 null。

render() 函数应该是纯粹的，也就是说该函数不修改组件 state，每次调用都返回相同的结果，不读写 DOM 信息，也不和浏览器交互（例如通过使用 setTimeout）。如果需要和浏览器交互，在 componentDidMount() 中或者其它生命周期方法中做这件事。保持 render() 纯粹，可以使服务器端渲染更加切实可行，也使组件更容易被理解。
*/
  render() {
    return (
         <Navigator
          renderScene={this.pageView.bind(this,this.Navigator)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
                routeMapper={NavigationBarRouteMapper} />
          }/>
    );
  }
  
   pageView(route, navigator) {
        return (
         
       <View style={styles.container}>
      
        <View style = {[styles.item,styles.center]}>
           <Text style = {styles.font}>  酒店 </Text>
        </View>
        
        <View style = {[styles.item,styles.lineLeftRight]}>
       
            <View style={styles.item}>
                <View style = {[styles.item,styles.lineCenter]}>
                <View style={[styles.center,styles.flex]}>
                <Text style = {styles.font}> 海外酒店 </Text>  
                </View>
                
                </View>
                <View style={[styles.center,styles.flex]}>
                <Text style = {styles.font}> 特惠酒店 </Text>
                </View>
            
            </View>
       </View>
       
        <View style={styles.item}>
        
           <View style = {[styles.item,styles.lineCenter]}>
                <View style={[styles.center,styles.flex]}>
                 <Text style = {styles.font}> 团购 </Text>  
                </View>
            </View>
            
            <View style={[styles.center,styles.flex]}>
               <Text style = {styles.font}> 客栈.公寓 </Text>
            
            </View>
        </View>
        
       </View>
        );
      }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 导航条
*/

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
          布局
        </Text>
      </TouchableOpacity>
    );
  }
};



const styles = StyleSheet.create({
  container: {
     marginTop:85,
     marginLeft:5,
     marginRight:5,
     height:84,
     flexDirection:'row',
     borderRadius:5,
     padding:2,
     backgroundColor:'#FF0067',
  },
  item: {
     flex: 1,
     height:80,

  },
  center: {
    justifyContent:'center',
    alignItems:'center',
  },
  flex:{
    flex:1, 
  },
  font:{
      color:'#fff',
      fontSize:16,
      fontWeight:'bold',
  },
  lineLeftRight:{
       borderColor: '#fff',
       borderLeftWidth: StyleSheet.hairlineWidth,
       borderRightWidth: StyleSheet.hairlineWidth
  },
   lineCenter:{
       borderColor: '#fff',
       borderBottomWidth: StyleSheet.hairlineWidth
  }
});
module.exports = RowViewPage;