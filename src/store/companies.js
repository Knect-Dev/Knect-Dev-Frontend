import axios from 'axios';

// Backend
const COMPANY_URL = 'https://knect-dev.herokuapp.com/Companies/';

const initialState = {
  companies: [],
  currentCompany: null,
};

const companiesReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'ADD_COMPANY':
      if (payload.errors) return state;
      console.log(payload)
      return { companies: [...state.companies, payload], currentCompany: payload };

    case 'UPDATE_COMPANY':
      //-- First we find the company we need to update, and make the changes --//
      let updatedCompanyId = state.companies.indexOf(state.companies.find(e => e.id === payload.id));
      let updatedCompany = state.companies.find(e => e.id === payload.id);
      updatedCompany = payload;

      //-- Second this filters the array to remove the contact we have updated, to prevent dupes --//
      state.companies.splice(updatedCompanyId, 1, updatedCompany);

      return { companies: state.companies, currentCompany: updatedCompany };

    case 'REMOVE_COMPANY':
      return { job: '' };

    case 'TEARDOWN_COMPANIES':

      return { companies: [] };

    case 'SET_CURRENT_COMPANY':
      let current = state.companies.find(elem => elem.id === payload);

      return { ...state, currentCompany: current };

    case 'SET_COMPANIES':

      return { ...state, companies: payload };

    default:
      return state;
  }
};

export const setCurrentCompany = (companyId) => (dispatch) => {
  dispatch({ type: 'SET_CURRENT_COMPANY', payload: companyId })
}

export const addCompany = (company, token) => async (dispatch, getState) => {
  try {
    let response = await axios({
      url: COMPANY_URL,
      method: 'post',
      headers: { 'Authorization': token },
      data: company,
    });

    let added = response.data;
    dispatch({ type: 'ADD_COMPANY', payload: added });
  } catch (e) {
    console.log(e);
  }
}

export const updateCompany = (company, token) => async (dispatch, getState) => {
  try {
    let response = await axios({
      url: `${COMPANY_URL}${company.id}`,
      method: 'put',
      headers: { 'Authorization': token },
      data: company,
    });

    let updated = response.data;
    dispatch({ type: 'UPDATE_COMPANY', payload: updated });
  } catch (e) {
    console.log(e);
  }
}

export const getCompanies = (token) => async (dispatch) => {
  try {
    let response = await axios({
      url: COMPANY_URL,
      method: 'get',
      headers: {
        'Authorization': token,
      }
    });

    let data = response.data;
    dispatch({ type: 'SET_COMPANIES', payload: data });
  } catch (e) {
    console.log(e);
  }
};

export const tearDownCompanies = (dispatch) => {
  dispatch({ type: 'TEARDOWN_COMPANIES' });
}

export default companiesReducer;
