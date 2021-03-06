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

export const reducer = (state = initialState, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case LOGIN_START:
    case FETCH_FRIEND_START:
      return {
        ...state,
        fetchingFriends: true
      };

    case LOGIN_SUCCESS:
      console.log(action.payload);

      localStorage.setItem('token', action.payload.payload);

      return {
        ...state,
        fetchingData: false
      };

    case FETCH_FRIEND_SUCCESS:
    console.log(action.payload.results)
      return {
        ...state,
        fetchingFriends: false,
        friends: [...action.payload]
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

export default reducer;

