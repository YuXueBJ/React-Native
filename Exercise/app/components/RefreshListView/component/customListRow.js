import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    Dimensions,
    View
} from 'react-native';

import  styles from './listRowCss';

//Title 
function textTitleView (text,index) {
 return (
      <Text key ={index} style={styles.titleFont}>{`${text}`}</Text>
 )}
 //其他项
 function textView (text,index) {
 return (
      <Text key ={index} style={styles.desFont}>{`${text}`}</Text>
 )}
 //自定义Cell 需要展示的项 返回一个标签数组
function customizeEnment(data) {
    let ListData = new Array();
    let index = 0 ;
    for(var key in data){ 
        if (index==0) {
            index++;
            continue;
        }else if(index==1){
            let view = textTitleView(`${data[key]}`,index);
            ListData.push(view);
        }else{
            let view = textView(`${key}:${data[key]}`,index);
            ListData.push(view);
        }
        index++;    
      }
    return ListData;
}

//生成展示Cell
export default class customListRowView extends React.Component{
      render(){
         let rowData = this.props.row;
         let data = customizeEnment(rowData);
        return (
           <View style={styles.container} > 
            {
               data
            }
             <View style={styles.rowLine} >
                <Text>{1}</Text>
             </View>
           </View>
        );
    }
}

