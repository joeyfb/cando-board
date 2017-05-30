import { createStore } from 'redux';
import reducer from './reducers';
import preload from './hydrate';

const configureStore = () =>
{
  const store = createStore(reducer, preload);

  return store;
}

export default configureStore
