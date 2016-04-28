var React = require('react-native')
var {
  AppRegistry,
  StyleSheet,
  Image,
  TouchableOpacity,
  PropTypes
} = React;

var TopButton = React.createClass({
  propTypes: {
    onPress: PropTypes.func,
  },
  render: function(){
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.topButton}>
        <Image source={require('./img/va-top.png')} style={styles.topButtomImg} />
      </TouchableOpacity>
    )
  }
});

var styles = StyleSheet.create({
  topButton:{
    position:'absolute',
    right:5,
    bottom:45,
    width:55,
    height:55,
    backgroundColor:'rgba(0,0,0,0)',
  },
  topButtomImg: {
    width:40,
    height:40,
  }
})

module.exports = TopButton;
