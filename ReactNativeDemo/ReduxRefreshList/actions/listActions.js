/**
 * Action 的任务是描述“发生了什么事情？”
 */
import React from 'react-native';
import * as types from './actionTypes';
import * as TestData from '../reducers/insetDataSource';
import CustomListRow from '../component/customListRow'
import CustomListEmpty from '../component/listEmptyView';

export function roadListView() {
       return {
        type:types.REOAD_LIST,
        data:TestData.refresData,
        error:null,
    };
}

export function refreshAction(id){
  // Thunk middleware 知道如何处理函数。
  // 这里把 dispatch 方法通过参数的形式传给函数，
  // 以此来让它自己也能 dispatch action。

  return function (dispatch,state,a,b) {
    // 首次 dispatch：更新应用的 state 来通知
    // API 请求发起了。
    //    dispatch(refresh())

    // thunk middleware 调用的函数可以有返回值，
    // 它会被当作 dispatch 方法的返回值传递。

    // 这个案例中，我们返回一个等待处理的 promise。
    // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。
    return fetch(`http://www.baidu.com?s = ${id}`)
      .then(response => response.json())
      .then(json =>{
         // 可以多次 dispatch！
         // 这里，使用 API 请求结果来更新应用的 state。
      }).catch(error=>{
          // 在实际应用中，还需要
          // 捕获网络请求的异常。
          dispatch(refresh())
      })
  }
}
 export function loadMoreAction(){
  return function (dispatch) {
    return fetch(`http://www.baidu.com`)
      .then(response => response.json())
      .then(json =>{

      }).catch(error=>{
          dispatch(loadMore())
      })
  }
  }
export function customListRow(rowData){
      return (
            <CustomListRow row={rowData}/>
        );
}

export function  customListEmptyView(params) {
    return (
       <CustomListEmpty/>  
    );
}

function refresh(json) {
      console.log('refresh');
      return {
        type:types.START_REFRESH_ACTION,
        data:TestData.refresData,
        customRow:customListRow,
        customEmpty:customListEmptyView,
        error:null,
     }
 }
function loadMore(json) {
     console.log('loadMore');
       return {
        type:types.LOAD_MORE_ACTION,
        data:TestData.loadMoreData,
        error:null,
    };
}

function NotFoundError(error) {
    return{
        type:types.REFRESH_ERROR_ACTION,
        data:null,
        error:{
            text:'请求错误',
        },
    }
}
