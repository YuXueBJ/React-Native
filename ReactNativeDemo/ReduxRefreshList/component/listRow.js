import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    Dimensions,
    View
} from 'react-native';

import  styles from './listRowCss';

class ListRowView extends React.Component{
      render(){
         let row = this.props.row;
        return (
            <View style={styles.container}>
            
                <Text style={styles.titleFont}>{
                    row.text
                }</Text>
                
                <View style={styles.rowLine}></View>
            </View>
        );
    }
}

module.exports = ListRowView;