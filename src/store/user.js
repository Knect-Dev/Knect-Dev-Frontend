import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';

// Backend
const USER_URL = 'https://knect-dev.herokuapp.com/'

const initialState = {
  user: {},
}

const userReducer = ( state = initialState, action) => {
  let {type, payload} = action;
  
  switch (type) {

    case 'SET_USER':
      const signedInUser = {
        id: payload.id,
        email: payload.email,
        name: payload.name,
        role: payload.role,
        token: payload.token
      }

      return { user: signedInUser };

      
    case 'REMOVE_USER':
      return { user: {}};

    default:
      return state;
  }
}

//get user
const setUser = user => {
  reactLocalStorage.setObject('localUser', user);
  console.log('setUser called')
  return {
    type: 'SET_USER',
    payload: user
  }
}
//set User via session data
export const setLocalUser = user => dispatch => {
  console.log('setLocalUser called')
  dispatch({
    type: 'SET_USER',
    payload: user
  });
}

export const removeUser = dispatch => {
  reactLocalStorage.remove('localUser');
  dispatch( {
    type: 'REMOVE_USER',
    payload: {}
  });
}

export const getusers = async dispatch => {
  try{
    let response = await axios.get(USER_URL);
    let data = response.data;
    dispatch(setUser(data));
  } catch(e){
    console.log(e)
  }
}

export const signInUser = (credientials) => async dispatch => {
  //axios request to sign in a user
  try {
    let response = await axios({
      url: `${USER_URL}signin/`,
      method: 'post',
      auth: {
        username: credientials.email,
        password: credientials.password
      }
    });
    let data = response.data.user[0];
    dispatch(setUser(data));
  } catch (e) {
    console.log(e)
  }
}

export const signUpUser = (credientials) => async dispatch => {
  //axios request to sign up a user
  try {
    let response = await axios({
      url: `${USER_URL}signup/`,
      method: 'post',
      data: credientials,
    });
    let data = response.data.user;
    dispatch(setUser(data));
  } catch (e) {
    console.log(e)
  }
}



export default userReducer;