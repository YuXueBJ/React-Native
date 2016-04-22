
import {createStore, combineReducers, applyMiddleware} from 'redux';
const reducers = require('../reducers')
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default store;

