import { createStore } from 'redux'
import { moveClear, moveCard } from './actions'
import reducer from './reducers'
import preload from './hydrate'

const configureStore = () =>
{
  const store = createStore(reducer, preload)

  const select = (state) =>
  {
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

  return store
}

export default configureStore
