import axios from 'axios';

// Backend
const JOB_URL = 'https://knect-dev.herokuapp.com/Jobs/';

const initialState = {
  jobs: [
    {
      id: 0,
      company: 'Microsoft',
      title: 'Developer',
      jobId: '1234re',
      jobUrl: 'someurl.com',
      appliedDate: '03/16/2022',
      stage: 'Not Applied',
      status: true,
      openPositions: 10,
      location: 'Seattle, WA',
      technologies: 'JavaScript, .NET',
      targeted: '',
      offer: '',
      notes: 'Notes here!',
    },
  ],
};

const jobReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_JOB':
      console.log(`👽 ~ file: jobs.js ~ line 29 ~ jobReducer ~ payload`, payload);
      return state;
    case 'UPDATE_JOB':
      //-- First we find the job we need to update, and make the changes --//
      console.log(`👽 ~ file: jobs.js ~ line 35 ~ jobReducer ~ payload`, payload);
      let updatedJobId = state.jobs.indexOf(state.jobs.find(e => e.id === payload.id));
      let updatedJob = state.jobs.find(e => e.id === payload.id);
      updatedJob = payload;

      //-- Finally, we concat those two arrays together, resulting in our updated array --//
      state.jobs.splice(updatedJobId, 1, updatedJob);

      return { jobs: state.jobs };

    case 'REMOVE_JOB':
      return { job: '' };

    case 'SET_JOBS':
      //payload is my array of jobs
      console.log("PAYLOAD @ SET_JOBS", payload);
      return { ...state, jobs: [...state.jobs, ...payload] };

    default:
      return state;
  }
};

export const addJob = (job) => async (dispatch, getState) => {
  try {
    // console.log("testUSER token:", `${process.env.USER_TOKEN}`);
    let response = await axios({
      url: JOB_URL,
      method: 'post',
      headers: { 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R1c2VyQHRlc3QuY29tIiwiaWF0IjoxNjQ3NDg4Njc0fQ.McFnceehlUQASOozJ7toBknPojl74cwsNrUTSEl7HD4' },
      data: job,
    });

    // let response = await axios.get(JOB_URL);
    let updated = response.data;
    console.log(updated);
    dispatch({ type: 'ADD_JOB', payload: updated });
  } catch (e) {
    console.log(e);
  }
}

export const getJobs = async (dispatch) => {
  try {
    let response = await axios({
      url: JOB_URL,
      method: 'get',
      headers: { 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3R1c2VyQHRlc3QuY29tIiwiaWF0IjoxNjQ3NDg4Njc0fQ.McFnceehlUQASOozJ7toBknPojl74cwsNrUTSEl7HD4' },
    });

    // let response = await axios.get(JOB_URL);
    let data = response.data;
    console.log(data);
    dispatch({ type: 'SET_JOBS', payload: data });
  } catch (e) {
    console.log(e);
  }
};

export default jobReducer;
