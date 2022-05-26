import "@babel/polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'

import Counter from './Counter'
import reducer from './reducers'

import createSagaMiddleware from "@redux-saga/core"
import rootSaga from './sagas'


const sagasMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagasMiddleware)
)

sagasMiddleware.run(rootSaga)
const action = type => store.dispatch({ type, value: store.getState() })


function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENTASYNC')} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
