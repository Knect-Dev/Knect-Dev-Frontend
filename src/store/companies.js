import axios from 'axios';

// Backend
const COMPANY_URL = '';

const initialState = {
  companies: [
    {
      name: 'Microsoft',
      leader: '',
      size: '10000+',
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
    case 'SET_COMPANY':
      return { jobs: payload.results };

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

export const getCompanies = async (dispatch) => {
  try {
    let response = await axios.get(COMPANY_URL);
    let data = response.data;
    dispatch(setCompany(data));
  } catch (e) {
    console.log(e);
  }
};

export default companiesReducer;
