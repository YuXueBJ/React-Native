'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
} = React;

class NoNavigatorPage extends Component {
  render() {
    var navigator = this.props.navigator;
    return (
      <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => navigator.pop()}>
          <Text style={{color: 'yellow'}}>我真的没有导航栏，点我试试，非打死你不可！！</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

module.exports = NoNavigatorPage;
