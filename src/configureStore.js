import { createStore } from 'redux';
import reducer from './reducers';
import { loadState, saveState } from './localStore';

const configureStore = () =>
{
  const store = createStore(
      reducer, 
      loadState()
  );

  store.subscribe(() =>
      {

        saveState(store.getState());
      })

  return store;
};

export default configureStore;
