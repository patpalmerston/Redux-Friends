// Reducers
import { combineReducers } from 'redux';
import { friendsReducer } from './FriendsReducer';
import { login } from './LoginReducer';

export default combineReducers({
  friendsReducer,
  login
})
