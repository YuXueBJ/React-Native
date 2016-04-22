import * as types from './actionTypes';

export function increment() {
  return {
    type: types.INCREMENT
  };
}

export function decrement() {
  return {
    type: types.DECREMENT
  };
  
}

export function startRefreshAction() {
    return {
        type:types.STARTREFRESHACTION
    };
}

export function loadMoreAction() {
       return {
        type:types.LOADMOREACTION
    };
}

export function refreshErrorAction() {
       return {
        type:types.REFRESHERRORACTION
    };
}
