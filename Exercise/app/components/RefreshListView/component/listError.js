import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
    View
} from 'react-native';

var {width, height} = Dimensions.get('window');

var styles = {
  emptyBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTxt: {
    fontSize: 15,
    fontWeight: 'bold',
  },
};

class ListError extends React.Component{
      render(){
         let row = this.props.row;
        return (
          <View style={styles.emptyBox}>
           <TouchableOpacity onPress={this.props.refresh} >
            <Text style={styles.emptyTxt}>{
              '请求数据错误 请点击重新刷新数据'
            }</Text>
            </TouchableOpacity>
          </View>
        );
    }
}
module.exports = ListError;