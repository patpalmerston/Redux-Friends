import { FETCH_FRIEND_START, FETCH_FRIEND_SUCCESS, FETCH_FRIEND_FAILURE } from '../actions';

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: {
    id: 1,
    name: 'Joe',
    age: 24,
    email: 'joe@lambdaschool.com',
  },
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
}

export const logReducer = (state = initialState, action) => {
  console.log('reducer', action)
  switch (action.type) {

    default: return state;
  }
}