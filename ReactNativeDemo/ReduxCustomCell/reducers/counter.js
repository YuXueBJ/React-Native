import * as types from '../actions/actionTypes';
import * as Jsondata  from '../reducers/testJsonData';

const initialState = {
    customDatas: Jsondata.JsonData,
};

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
      //
     case types.LIST_CELL_DEFAULT_STYLE:{
        return {
            ...state,
        };
    }
    case types.LIST_CELL_CUSTOM_STYLE:{
        return {
            ...state,
        };
      }
    default:
      return state;
  }
}
