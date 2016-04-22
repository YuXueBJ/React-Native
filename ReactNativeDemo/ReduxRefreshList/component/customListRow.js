import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    Dimensions,
    View
} from 'react-native';

import  styles from './listRowCss';

export default class customListRowView extends React.Component{
      render(){
         let row = this.props.row;
        return (
            <View style={styles.container}>
                 <Text style={styles.titleFont}>{row.text}</Text>
                 <Text style = {styles.desFont}>{'自定义cell'}</Text>
                 <View style={styles.rowLine}></View>
            </View>
        );
    }
}

