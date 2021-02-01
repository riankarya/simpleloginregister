import {  applyMiddleware, createStore, compose } from 'redux'
import reducer from './reducer.js'
import ReduxThunk from 'redux-thunk'

const store = createStore(reducer , compose(applyMiddleware(ReduxThunk)))

export default store