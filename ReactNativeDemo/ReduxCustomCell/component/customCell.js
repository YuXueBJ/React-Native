import React, {
  AppRegistry,
  StyleSheet,
  Component,
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';

var {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  
  rowView: {
    marginTop:20,
    width: width,
    backgroundColor: 'lightgray',
    flex: 1,
  },
  rowTitlestyle:{
      marginTop:10,
      height:20,
      marginLeft:10,
      color:'#3B3B3B',
      fontSize:15,
      fontWeight:'bold', 
  },
   rowstyle:{
      height:20,
      marginLeft:10,
      color:'#3B3B3B',
      fontSize:12,
  }
});

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  //List Cell View
  renderRow(row) {
    return (
         <ListRowView row={row}/>
    );
  }
  
  render() {
    const { data } = this.props;
    debugger
    return (
      <View style={styles.rowView}>
       { 
        /*{
            id: 100113455,
            '名称': "201604180005",
            '所有人': "zly001",
            '创建日期': "2016-04-18",
            '创建人': "zly001",
            '文本': "fdasfdsafdsa"
          };
        */  
         data.map(function(data,index){
           let key = Object.keys(data)[index];
           if(index==0){
             return <Text style={styles.rowTitlestyle}>{`${data[key]}`}</Text>;
           }
          //  return  <Text style={styles.rowstyle} key={data.id}>{`${key}:${data[key]}`}</Text>;
             return   <Text style={styles.rowstyle}>{`${key}:${data[key]}`}</Text>;
         })
       }
      </View>
    );
  }
}
