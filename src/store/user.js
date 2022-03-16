import axios from 'axios';

// Backend
const USER_URL = ''

const initialState = {
  user: [{
    firstName: 'Mya',
    lastName: 'Linse',
    email: 'MyaMooCow@takinNaps.com',
    token: '123abc',
    role: 'Queen of the World'
  }],
}

const userReducer = ( state = initialState, action) => {
  let {type, payload} = action;
  
  switch (type) {

    case 'SET_USER':

      return { user: payload.results};

      
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


export default userReducer;