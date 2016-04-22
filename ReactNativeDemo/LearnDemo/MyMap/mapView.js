// MapView.js

var { requireNativeComponent } = require('react-native');

// requireNativeComponent 自动把这个组件提供给 "RCTMapManager"
// module.exports = requireNativeComponent('RCTMap', null);

class MapView extends React.Component {
  render() {
    return <RCTMap {...this.props} />;
  }
}

MapView.propTypes = {
  /**
   * 当这个属性被设置为true，并且地图上绑定了一个有效的可视区域的情况下，
   * 可以通过捏放操作来改变摄像头的偏转角度。
   * 当这个属性被设置成false时，摄像头的角度会被忽略，地图会一直显示为俯视状态。
   */
  pitchEnabled: React.PropTypes.bool,
};

var RCTMap = requireNativeComponent('RCTMap', MapView);

module.exports = MapView;