import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import {todoApp} from './action.jsx'


function getStore() {
    const reducer = combineReducers({
        todo: todoApp
    })
    // Apply this middleware to the Store.
    return applyMiddleware()(createStore)(reducer, window.devToolsExtension && window.devToolsExtension());
}
const store = getStore();

export default store;