'use strict';

import React, { Component,Text } from     'react-native';
const { bindActionCreators } = require('redux')
const { connect }            = require('react-redux')

import * as counterActions from           '../actions/listActions';
import RefreshListView from '../component/refreshListView'

class ListViewApp extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {state, actions } = this.props;
    return (
      <RefreshListView
        data={state.dataSource}
        customRow= {state.customRow}
        error = {state.error}
        {...actions} />
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.reducer
  }
}
function mapDispatchToProps(dispatch) {
  return{
       actions: bindActionCreators(counterActions, dispatch)
  } 
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(ListViewApp)

// export default connect(state => ({
//     state: state.reducer
//   }),
//   (dispatch) => ({
//     actions: bindActionCreators(counterActions, dispatch)
//   })
// )(ListViewApp);
