import axios from 'axios';

// Backend
const JOB_URL = '';

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
    case 'SET_JOB':
      //-- First we find the job we need to update, and make the changes --//
      console.log(`👽 ~ file: jobs.js ~ line 34 ~ jobReducer ~ payload.id`, payload);
      let updatedJob = state.jobs.find(e => e.id === payload.id);
      updatedJob[payload.name] = payload.value;

      //-- Second this filters the array to remove the job we have updated, to prevent dupes --//
      let noChanges = state.jobs.filter(e => e.id !== payload.id);

      //-- Finally, we concat those two arrays together, resulting in our updated array --//
      let updatedJobs = noChanges.concat(updatedJob);

      return { jobs: updatedJobs };

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
