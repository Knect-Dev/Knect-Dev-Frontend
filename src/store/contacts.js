import axios from 'axios';

// Backend
const CONTACTS_URL = ''

const initialState = {
  contacts: [
    {
    id: 1,
    name: 'Mya Linse',
    role: 'Technical Recruiter',
    company: 'NapsRus',
    email: 'MyaMooCow@takinNaps.com',
    linkedIn: 'linkedIn.com/r/MyaTheMoo',
    phone: '411',
    photo: 'No Photos Please',
    notes: 'Give me snacks'
  }, {
      id: 2,
      name: 'Daniel',
      role: 'Technical Recruiter',
    company: 'NapsRus',
    email: 'MyaMooCow@takinNaps.com',
    linkedIn: 'linkedIn.com/r/MyaTheMoo',
    phone: '411',
    photo: 'No Photos Please',
    notes: 'Give me snacks'
    }
  ],
}

const contactsReducer = ( state = initialState, action) => {
  let {type, payload} = action;
  
  switch (type) {

    case 'SET_CONTACTS':
      //-- First we find the contact we need to update, and make the changes --//
      let updatedContactIdx = state.contacts.indexOf(state.contacts.find(e => e.id === payload.id));
      let updatedContact = state.contacts.find(e => e.id === payload.id);
      updatedContact[payload.name] = payload.value;

      //-- Second this filters the array to remove the contact we have updated, to prevent dupes --//
      state.contacts.splice(updatedContactIdx, 1, updatedContact);

      return { contacts: state.contacts };

    case 'REMOVE_CONTACTS':
      return { contacts: [] };

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

export const getContacts = async dispatch => {
  try{
    let response = await axios.get(CONTACTS_URL);
    let data = response.data;
    dispatch(setContacts(data));
  } catch(e){
    console.log(e)
  }
}


export default contactsReducer;