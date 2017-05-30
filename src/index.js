import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, Dispatch } from 'react-redux'
import { moveClear, moveCard } from './actions'
import App from './components/App'
import reducer from './reducers'
import './App.css';
import preload from './hydrate'

const store = createStore(reducer, preload)

const select = (state) =>
{
  console.log(state)
  return state.moving
}

const handleMove = () =>
{
  const moving = select(store.getState())

  if (moving.stop)
  {
    store.dispatch(moveClear())
  }
}

store.subscribe(handleMove)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
