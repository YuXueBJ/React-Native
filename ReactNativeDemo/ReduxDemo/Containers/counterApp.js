'use strict';

import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import Counter from '../Component/counter';
import * as counterActions from '../Actions/counterActions';
import { connect } from 'react-redux';

class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Counter
        counter={state.count}
        {...actions} />
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(CounterApp);
