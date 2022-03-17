import axios from 'axios';

// Backend
const COMPANY_URL = 'https://knect-dev.herokuapp.com/Companies';

const initialState = {
  companies: [
    {
      id: 1,
      name: 'Microsoft',
      leader: '',
      size: 10000,
      hq: 'Redmond, WA',
      product: 'Software',
      clients: 'Kellen, Daniel',
      mission: '',
      careersURL: '',
      companyURL: '',
      logo: '',
    },
    {
      id: 2,
      name: 'Uber',
      leader: '',
      size: 10000,
      hq: 'Redmond, WA',
      product: 'Software',
      clients: 'Kellen, Daniel',
      mission: '',
      careersURL: '',
      companyURL: '',
      logo: '',
    },
  ],
};

const companiesReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'UPDATE_COMPANY':
      //-- First we find the company we need to update, and make the changes --//
      let updatedCompanyId = state.companies.indexOf(state.companies.find(e => e.id === payload.id));
      let updatedCompany = state.companies.find(e => e.id === payload.id);
      updatedCompany[payload.name] = payload.value;

      //-- Second this filters the array to remove the contact we have updated, to prevent dupes --//
      state.companies.splice(updatedCompanyId, 1, updatedCompany);

      return { companies: state.companies };

    case 'REMOVE_COMPANY':
      return { job: '' };

    default:
      return state;
  }
};

//get company
const setCompany = (company) => {
  return {
    type: 'SET_COMPANY',
    payload: company,
  };
};

let token = process.env.TEST_TOKEN;

const config = {
  headers: { Authorization: `Bearer ${token}` }
};

export const getCompanies = async (dispatch) => {
  try {
    let response = await axios.get(COMPANY_URL, config);
    let data = response.data;
    console.log('Data: ', data)
    dispatch(setCompany(data));
  } catch (e) {
    console.log(e);
  }
};

export default companiesReducer;
