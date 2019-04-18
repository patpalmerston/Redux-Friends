// Reducers
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE, 
  FETCH_FRIEND_START,
  FETCH_FRIEND_SUCCESS,
  FETCH_FRIEND_FAILURE
} from '../actions';

const initialState = {
  friends: [],
  // deletingFriend: false,
  fetchingFriends: false,
  loggingIn: false,
  // savingFriends: false,
  // updatingFriend: false,
  error: null
}

export const friendsReducer = (state = initialState, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case FETCH_FRIEND_START:
    return {
      ...state,
      fetchingFriends: true
    };

    case FETCH_FRIEND_SUCCESS:
    console.log(action.payload.results)
      return {
        ...state,
        fetchingFriends: false,
        friends: [...action.payload.data]
        //is it data or results?
      }

    case FETCH_FRIEND_FAILURE:
      return {
        ...state,
        // fetchingFriends: false, ---do I need this?
        error: action.payload
      }

    default: return state;
  }
}
