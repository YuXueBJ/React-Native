/**
 * Reducer 的任务是根据传入的 Action 对象去修改状态树。
*/

import * as types from '../actions/actionTypes';
import * as dataArray from './insetDataSource';

 const insertState = {
    dataSource: dataArray.insertData,
    isCustomRow:true,
    customRow:null,
};
let insertAction = {

};

export default function counter(
state = insertState, action = insertAction) {
  switch (action.type) {
    case types.REOAD_LIST:{
       return{
          ...state,
          dataSource:state.dataSource,
      };
    }
    case types.START_REFRESH_ACTION:{
        return{
            ...state,
            dataSource:action.data,
            customRow:action.customRow,
        };
    }
      case types.LOAD_MORE_ACTION:{
        return{
            ...state,
            dataSource:state.dataSource.concat(action.data),
        };
    }
    case types.REFRESH_ERROR_ACTION:{
        return{
            ...state,
            dataSource:null,
            error:action.error,
        };
    }
    default:
      return state;
  }
}
