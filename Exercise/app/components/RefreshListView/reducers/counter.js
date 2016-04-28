/**
 * Reducer 的任务是根据传入的 Action 对象去修改状态树。
*/

import * as types from '../actions/actionTypes';

 const insertState = {
    dataSource: [],
    isCustomRow:true,
    customRow:null,
    isLoadMore:false,
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
           isLoadMore:action.isLoadMore,
         
      };
    }
    case types.START_REFRESH_ACTION:{
        return{
           ...state,
            dataSource:action.data,
            customRow:action.customRow,
            isLoadMore:action.isLoadMore,
             
        };
    }
      case types.LOAD_MORE_ACTION:{
        return{
             ...state,
            dataSource:state.dataSource.concat(action.data),
            isLoadMore:action.isLoadMore,
          
        };
    }
    case types.REFRESH_ERROR_ACTION:{
        return{
            ...state,
            dataSource:null,
            error:action.error,
            isLoadMore:action.isLoadMore,
        };
    }
    default:
      return state;
  }
}
