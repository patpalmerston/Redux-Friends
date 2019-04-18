//actions
import axios from 'axios'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCH_FRIEND_START = 'FETCH_FRIEND_START';
export const FETCH_FRIEND_SUCCESS = 'FETCH_FRIEND_SUCCESS';
export const FETCH_FRIEND_FAILURE = 'FETCH_FRIEND_FAILURE';


export const login = () => dispatch => {
  dispatch({ type: LOGIN_START })
}

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIEND_START });

  axios.get('http://localhost:5000/api/friends')
    .then(res => dispatch({
      type: FETCH_FRIEND_SUCCESS,
      payload: res.data
    }))
    
    .catch(err => dispatch({
      type: FETCH_FRIEND_FAILURE,
      payload: 'Error! Unable to Fetch API'
    }))
}
