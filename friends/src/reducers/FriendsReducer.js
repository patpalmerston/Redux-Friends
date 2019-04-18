import { FETCH_FRIEND_START } from '../actions';

const initialState = {
  friends: [],
  deletingFriend: false,
  fetchingFriends: false,
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
}

export const logReducer = (state = initialState, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case FETCH_FRIEND_START:
    return {
      ...state,
      fetchingFriends: true
    };

    default: return state;
  }
}