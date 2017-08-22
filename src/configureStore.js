import { createStore } from 'redux';
import { throttle } from 'lodash'
import { loadState, saveState } from './localStore';
import reducer from './reducers';

const configureStore = () =>
{
  const state = loadState();
  delete state.moving;

  const fakeState = [
    {
      title: 'A Board',
      object: 'board',
      id: 'a',
      refs: [ 0 ]
    },
    {
      title: 'Done',
      object: 'list',
      id: 0,
      refs: [ 1, 2 ]
    },
    {
      title: 'Do the THING',
      object: 'card',
      id: 1,
      refs: []
    },
    {
      title: 'Do a THING',
      object: 'card',
      id: 2,
      refs: []
    }
  ];
  
  const store = createStore(
      reducer, 
      {
        entities: fakeState,
        moving: {}
      }
  );

  store.subscribe(throttle(() =>
      {
        saveState(store.getState());
      }, 1000))

  return store;
};

export default configureStore;
