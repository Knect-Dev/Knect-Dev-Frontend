import axios from 'axios';

// Backend
const COMPANY_URL = 'https://knect-dev.herokuapp.com/Companies';

const initialState = {
  companies: [
    {
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

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R1c2VyQHRlc3QuY29tIiwiaWF0IjoxNjQ3NDU4Mzc1fQ.5jr-l4hPDwrpxEnypNBd6kmTs8htbQ0OwZ_I4kUyDb8"
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
