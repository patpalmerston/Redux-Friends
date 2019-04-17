import * as actionTypes from '../actions';

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
}

export const logReducer = (state = initialState, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case actionTypes.FETCH_FRIEND_START:
    return {
      ...state,
      fetchingFriends: true
    };

    default: return state;
  }
}