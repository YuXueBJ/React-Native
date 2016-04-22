'use strict';

import React, {Image, Dimensions,AppRegistry, Component,StyleSheet,Text,View} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  

const HOME = 'home';
 
const HOME_NORMAL = require('../../Image/tabs/home_normal.png');
 console.log(HOME_NORMAL);

const HOME_FOCUS = require('../../Image/tabs/home_focus.png');
const CATEGORY = 'category';
const CATEGORY_NORMAL = require('../../Image/tabs/category_normal.png');
const CATEGORY_FOCUS = require('../../Image/tabs/category_focus.png');
const FAXIAN = 'faxian';
const FAXIAN_NORMAL = require('../../Image/tabs/faxian_normal.png');
const FAXIAN_FOCUS = require('../../Image/tabs/faxian_focus.png');
const CART = 'cart';
const CART_NORMAL = require('../../Image/tabs/cart_normal.png');
const CART_FOCUS = require('../../Image/tabs/cart_focus.png');
const PERSONAL = 'personal';
const PERSONAL_NORMAL = require('../../Image/tabs/personal_normal.png');
const PERSONAL_FOCUS = require('../../Image/tabs/personal_focus.png');

var TabbarHomePage   = require('./CDTabbarHomePage');

var {width, height} = Dimensions.get('window');

 export default class TabbarView extends Component {
    
       constructor(props) {
        super(props);
        this.state = {selectedTab: HOME}
    }
     _renderTabItem(img, selectedImg, tag, childView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={() => this.setState({ selectedTab: tag })}>
                {childView}
            </TabNavigator.Item>
        );
    }
      static _createChildView(tag) {
        return (
            <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }
    
    render(){
        return (
          <View style = {styles.backViewsType}>
             <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                    {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME,<TabbarHomePage/>)}
                    {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY, TabbarView._createChildView(CATEGORY))}
                    {this._renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, FAXIAN, TabbarView._createChildView(FAXIAN))}
                    {this._renderTabItem(CART_NORMAL, CART_FOCUS, CART, TabbarView._createChildView(CART))}
                    {this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL, TabbarView._createChildView(PERSONAL))}
                </TabNavigator>
          </View>
        )
    }
};
const styles = StyleSheet.create({
    
   backViewsType:{
        backgroundColor:'#FFEBCD',
        flex:1, 
        width:width,
        height:height,
   },
    tab: {  
        height: 52,  
        backgroundColor: '#FFFFFF',  
        alignItems: 'center'  
    },
     tabIcon: {
        width: 30,
        height: 35,
        resizeMode: 'stretch',
        marginTop: 12.5
    }  
});

module.exports = TabbarView;