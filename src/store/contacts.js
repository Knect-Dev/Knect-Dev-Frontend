import axios from 'axios';

// Backend
const CONTACTS_URL = ''

const initialState = {
  contacts: [{
    firstName: 'Mya',
    lastName: 'Linse',
    company: 'NapsRus',
    email: 'MyaMooCow@takinNaps.com',
    linkedIn: 'linkedIn.com/r/MyaTheMoo',
    phone: '411',
    photo: 'No Photos Please',
    notes: 'Give me snacks'
  }],
}

const contactsReducer = ( state = initialState, action) => {
  let {type, payload} = action;
  
  switch (type) {

    case 'SET_CONTACTS':

      return { contacts: payload.results};

      
    case 'REMOVE_CONTACTS':

      return { contacts: []};

    default:
      return state;
  }
}

//get contacts
const setContacts = contacts => {
  return {
    type: 'SET_CONTACTS',
    payload: contacts
  }
}

export const getContactss = async dispatch => {
  try{
    let response = await axios.get(CONTACTS_URL);
    let data = response.data;
    dispatch(setContacts(data));
  } catch(e){
    console.log(e)
  }
}


export default contactsReducer;