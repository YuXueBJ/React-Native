import React,{Component,Text } from 'react-native';
const { bindActionCreators } = require('redux')
const { connect }            = require('react-redux')

import CustomCellView from '../component/customCell';
import * as CellActions from '../actions/cellActions';

class customRowView extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        const{state,actions}=this.props;
        return (
          <CustomCellView
           data = {state.customDatas}
           {...actions}
          />  
        );
    }
}

function mapStateToProps(state) {
  return {
    state: state.counter
  }
}
function mapDispatchToProps(dispatch) {
  return{
       actions: bindActionCreators(CellActions, dispatch)
  } 
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(customRowView)
