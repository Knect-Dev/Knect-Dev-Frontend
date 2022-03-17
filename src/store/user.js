import axios from 'axios';

// Backend
const USER_URL = 'https://knect-dev.herokuapp.com/signin/'

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
      console.log('SIGNEDIN USER', signedInUser);

      return { user: signedInUser };

      
    case 'REMOVE_USER':

      return { user: ''};

    default:
      return state;
  }
}

//get user
const setuser = user => {
  return {
    type: 'SET_USER',
    payload: user
  }
}

export const getusers = async dispatch => {
  try{
    let response = await axios.get(USER_URL);
    let data = response.data;
    dispatch(setuser(data));
  } catch(e){
    console.log(e)
  }
}

export const signInUser = (credientials) => async dispatch => {
  //axios request to sign in a user
  try {
    let response = await axios({
      url: USER_URL,
      method: 'post',
      auth: {
        username: credientials.email,
        password: credientials.password
      }
    });
    console.log(response);
    let data = response.data.user[0];
    dispatch({
      type: 'SET_USER',
      payload: data
    });
  } catch (e) {
    console.log(e)
  }
}

export const signUpUser = async dispatch => {
  //axios request to sign up a user
  try {
    let response = await axios.get(USER_URL);
    let data = response.data;
    dispatch(setuser(data));
  } catch (e) {
    console.log(e)
  }
}



export default userReducer;