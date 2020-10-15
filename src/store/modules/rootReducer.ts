import { combineReducers } from 'redux';

import devReducer from './devs/reducer';
import repoReducer from './repos/reducer';

export default combineReducers({
  devReducer,
  repoReducer,
});
