/**
 * tore 就是把 Reducer 和 action 联系到一起的对象。
 * Store 有以下职责：
 * 维持应用的 state；
 * 提供 getState() 方法获取 state；
 * 提供 dispatch(action) 方法更新 state；
 * 通过 subscribe(listener) 注册监听器；
 */
import {createStore, combineReducers, applyMiddleware} from 'redux';
const reducers = require('../reducers')
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);
const reducer = combineReducers(reducers);
const store   = createStoreWithMiddleware(reducer);

export default store;

