import axios from 'axios';

// Backend
const JOB_URL = '';

const initialState = {
  jobs: [
    {
      company: 'Microsoft',
      title: 'Developer',
      location: 'Seattle',
      appliedDate: '',
      applied: true,
      targeted: '',
      technologies: '.NET, Azure',
      openPositions: '1',
      interview: true,
      contacts: '',
      notes: '',
    },
  ],
};

const jobReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'SET_JOB':
      return { jobs: payload.results };

    case 'REMOVE_JOB':
      return { job: '' };

    default:
      return state;
  }
};

//get job
const setJob = (job) => {
  return {
    type: 'SET_JOB',
    payload: job,
  };
};

export const getJobs = async (dispatch) => {
  try {
    let response = await axios.get(JOB_URL);
    let data = response.data;
    dispatch(setJob(data));
  } catch (e) {
    console.log(e);
  }
};

export default jobReducer;
