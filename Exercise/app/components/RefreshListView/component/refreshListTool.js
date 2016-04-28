var React = require('react-native')
var {
  AppRegistry,
  ListView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  PropTypes,
  RefreshControl
} = React;

var TopButton = require('./TopButton'),
    // Loader = require('react-native-sk-loader'), // 加载器
        Loader = require('./Listloader'), // 加载器
    {width} = Dimensions.get('window');

var RefreshableListView = React.createClass({
  statics: {
    DataSource: ListView.DataSource,
  },

  propTypes: {
    onRefresh: PropTypes.func.isRequired, //　刷新数据的回调
    onLoadMore: PropTypes.func.isRequired,　//　加载更多数据的回调
  },

  listHeight: 0, // listview（scrollview）高度
  contentHeight: 0, // contentView高度

  getDefaultProps() {
    return {
      showLoadMore: false, // 是否显示加载更多
      hasTopButton: false, // 是否显示回到顶部的按钮
    }
  },

  getInitialState() {
    return {
      isRefreshing: false, // 是否正在刷新
      isLoadingMore: false, // 是否正在加载更多
    }
  },

  // 渲染脚部
  renderFooter: function() {
    // 没有更多/下一页数据
    if (!this.props.showLoadMore) {
      return null;
    }

    // 自定义渲染
    if (this.props.renderFooter) {
      return this.props.renderFooter(this.state.isLoadingMore)
    }

    // 默认渲染
    return (<Footer />)
  },

  // 划到底部的事件
  handleEndReached(e) {
    if (! this.props.showLoadMore) return;
    this.startLoadMore();
  },

  // 是否正在加载
  isLoading(){
    return this.state.isRefreshing || this.state.isLoadingMore;
  },

  // 加载更多/下一页数据
  startLoadMore() {
    if (this.props.onLoadMore && ! this.isLoading()) {
      this.state.isLoadingMore = true;
      this.props.onLoadMore().then(this.finishLoadMore, this.finishLoadMore);
    }
  },
  finishLoadMore() {
    this.state.isLoadingMore = false;
  },

  //  刷新数据
  startRefresh() {
    if (this.props.onRefresh && ! this.isLoading()) {
      this.setState({isRefreshing: true});
      this.props.onRefresh().then(this.finishRefresh, this.finishRefresh);
    }
  },
  finishRefresh() {
    this.setState({isRefreshing: false});
  },

  getScrollResponder() {
    return this.refs.listView.getScrollResponder();
  },

  setNativeProps(props) {
    this.refs.listView.setNativeProps(props)
  },

  // 滚动顶部
  scrollToTop: function(){
    this.refs.listview.scrollTo({y: 0});
  },

  // 滚动底部
  scrollToBottom: function(animated = true){
    if (this.listHeight && this.contentHeight && this.contentHeight > this.listHeight) {
      var scrollDistance =  this.contentHeight - this.listHeight;
      this.refs.listview.scrollTo({
        y: scrollDistance,
        animated,
      });
    }
  },

  render() {
    return (
      <View style={{flex:1}}>
        {/* 列表页 */}
        <ListView
          {...this.props}
          ref="listview"
          style={[styles.listview, this.props.style]}
          renderFooter={this.renderFooter} // 上拉加载更多的脚部
          onEndReached={this.handleEndReached}
          onEndReachedThreshold={0}
          refreshControl={ // 下拉刷新的头部
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.startRefresh}
              tintColor="#ff0000"
              title="Loading..."
              colors={['#ff0000', '#00ff00', '#0000ff']}
              progressBackgroundColor="#ffff00"
            />
          }
          onLayout={(event)=>{
              var layout = event.nativeEvent.layout;
              this.listHeight = layout.height;
          }}
          onContentSizeChange={(width, height)=>{
              this.contentHeight = height;
          }}
          />
        {/* 回滚到顶部的按钮 */}
        {this.props.hasTopButton && (
          <TopButton onPress={this.scrollToTop} />
        )}
      </View>
    )
  },
});

// 脚部
var Footer = React.createClass({
  render: function(){
    var desc = '正在加载更多...';
    return (
      <View style={styles.loadMore} onLayout={this.props.onLayout}>
        <Loader style={styles.activityIndicator} />
        <Text style={styles.description}>
          {desc}
        </Text>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  loadMore: {
    // position: 'absolute',
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 60,
  },
  description: {
    color: '#333',
    marginLeft: 6,
  },
  activityIndicator:{
    alignSelf: 'center',
  },
})

module.exports = RefreshableListView;
