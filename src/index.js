import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import MyContainerComponent from './components/MyContainerComponent.jsx'
import store from './store.jsx'
import {todoApp} from './action.jsx'


// Render the Provider component with the the Store
// in the props at the root of the hierarhy.
ReactDOM.render(
  <Provider store={store}>
    <MyContainerComponent />
  </Provider>,
  document.getElementById('container')
)
