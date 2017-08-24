import { createStore } from 'redux';
import { throttle } from 'lodash'
import { loadState, saveState } from './localStore';
import reducer from './reducers';

const configureStore = () =>
{
  const state = loadState();
  delete state.moving;

  const store = createStore(
      reducer,
      state
  );

  store.subscribe(throttle(() =>
      {
        saveState(store.getState());
      }, 1000))

  return store;
};

export default configureStore;
