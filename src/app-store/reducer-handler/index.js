import { combineReducers } from 'redux';

import login from './login-reducer';
import signup from './signup-reducer';
// Wrap all reducers in a container
export default combineReducers({
  login,
  signup
});
