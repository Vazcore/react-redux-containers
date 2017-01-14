import { combineReducers } from 'redux';
import UserReducer from './user.reducer';
import ActiveUserReducer from './active-user.reducer';

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer
});

export default allReducers;
