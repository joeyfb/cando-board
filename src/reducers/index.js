import { combineReducers } from 'redux';
import entities from './entities';
import moving from './moving';

const boardApp = combineReducers({
  entities,
  moving
});

export default boardApp;
