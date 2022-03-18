import axios from 'axios';

// Backend
const COMPANY_URL = 'https://knect-dev.herokuapp.com/Companies/';

const initialState = {
  companies: [
    // {
    //   id: 1,
    //   name: 'Microsoft',
    //   leader: '',
    //   size: 10000,
    //   hq: 'Redmond, WA',
    //   product: 'Software',
    //   clients: 'Kellen, Daniel',
    //   mission: '',
    //   careersURL: '',
    //   companyURL: '',
    //   logo: '',
    // },
    // {
    //   id: 2,
    //   name: 'Uber',
    //   leader: '',
    //   size: 10000,
    //   hq: 'Redmond, WA',
    //   product: 'Software',
    //   clients: 'Kellen, Daniel',
    //   mission: '',
    //   careersURL: '',
    //   companyURL: '',
    //   logo: '',
    // },
  ],
};

const companiesReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'ADD_COMPANY':
      if (payload.errors) return state;
      return { companies: [...state.companies, payload] };

    case 'UPDATE_COMPANY':
      //-- First we find the company we need to update, and make the changes --//
      let updatedCompanyId = state.companies.indexOf(state.companies.find(e => e.id === payload.id));
      let updatedCompany = state.companies.find(e => e.id === payload.id);
      updatedCompany = payload;

      //-- Second this filters the array to remove the contact we have updated, to prevent dupes --//
      state.companies.splice(updatedCompanyId, 1, updatedCompany);

      return { companies: state.companies };

    case 'REMOVE_COMPANY':
      return { job: '' };

    case 'SET_COMPANIES':


      return { companies: payload }


    default:
      return state;
  }
};

export const addCompany = (company) => async (dispatch, getState) => {
  try {
    let response = await axios({
      url: COMPANY_URL,
      method: 'post',
      headers: { 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R1c2VyQHRlc3QuY29tIiwiaWF0IjoxNjQ3NDg4Njc0fQ.McFnceehlUQASOozJ7toBknPojl74cwsNrUTSEl7HD4' },
      data: company,
    });

    let added = response.data;
    dispatch({ type: 'ADD_COMPANY', payload: added });
  } catch (e) {
    console.log(e);
  }
}

export const updateCompany = (company) => async (dispatch, getState) => {
  try {
    let response = await axios({
      url: `${COMPANY_URL}${company.id}`,
      method: 'put',
      headers: { 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R1c2VyQHRlc3QuY29tIiwiaWF0IjoxNjQ3NDg4Njc0fQ.McFnceehlUQASOozJ7toBknPojl74cwsNrUTSEl7HD4' },
      data: company,
    });

    let updated = response.data;
    dispatch({ type: 'UPDATE_COMPANY', payload: updated });
  } catch (e) {
    console.log(e);
  }
}

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R1c2VyQHRlc3QuY29tIiwiaWF0IjoxNjQ3NDg4Njc0fQ.McFnceehlUQASOozJ7toBknPojl74cwsNrUTSEl7HD4';

const config = {
  headers: { Authorization: `Bearer ${token}` }
};

export const getCompanies = async (dispatch) => {
  try {
    let response = await axios.get(COMPANY_URL, config);
    let data = response.data;
    console.log('Companies: ', data)
    dispatch({ type: 'SET_COMPANIES', payload: data });
  } catch (e) {
    console.log(e);
  }
};

export default companiesReducer;
