import axios from 'axios';

// Backend
const JOB_URL = 'https://knect-dev.herokuapp.com/Jobs/';

const initialState = {
  jobs: [],
  curentJob: '',
};

const jobReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_JOB':
      if (payload.errors) return state;
      return { jobs: [...state.jobs, payload] };
    case 'UPDATE_JOB':
      //-- First we find the job we need to update, and make the changes --//
      let updatedJobId = state.jobs.indexOf(state.jobs.find(e => e.id === payload.id));
      let updatedJob = state.jobs.find(e => e.id === payload.id);
      updatedJob = payload;

      //-- Finally, we concat those two arrays together, resulting in our updated array --//
      state.jobs.splice(updatedJobId, 1, updatedJob);

      return { jobs: state.jobs };

    case 'REMOVE_JOB':
      let newArr = state.jobs.filter(job => job.id !== payload);

      return { jobs: newArr };

    case 'TEARDOWN_JOBS':

      return { jobs: [] };

    case 'SET_JOBS':
      //-- Upon rerender, this sets the jobs to a blank array so that it may be populated with new jobs --//
      state.jobs = [];
      //-- Payload here is an array of Jobs matching the User's ID --//
      return { ...state, jobs: [...state.jobs, ...payload] };

    default:
      return state;
  }
};

export const addJob = (job, token) => async (dispatch, getState) => {
  try {
    let response = await axios({
      url: JOB_URL,
      method: 'post',
      headers: { 'Authorization': token },
      data: job,
    });

    let added = response.data;
    dispatch({ type: 'ADD_JOB', payload: added });
  } catch (e) {
    console.log(e);
  }
}

export const updateJob = (job, token) => async (dispatch, getState) => {
  try {
    let response = await axios({
      url: `${JOB_URL}${job.id}`,
      method: 'put',
      headers: { 'Authorization': token },
      data: job,
    });

    let updated = response.data;
    dispatch({ type: 'UPDATE_JOB', payload: updated });
  } catch (e) {
    console.log(e);
  }
}

export const deleteJob = (id, token) => async (dispatch, getState) => {
  try {
    await axios({
      url: `${JOB_URL}${id}`,
      method: 'delete',
      headers: { 'Authorization': token },
    });

    dispatch({ type: 'REMOVE_JOB', payload: id });
  } catch (e) {
    console.log(e);
  }
}

export const getJobs = (token) => async (dispatch) => {
  try {
    let response = await axios({
      url: JOB_URL,
      method: 'get',
      headers: { 'Authorization': token },
    });
    let data = response.data;
    dispatch({ type: 'SET_JOBS', payload: data });
  } catch (e) {
    console.log(e);
  }
};

export const tearDownJobs = (dispatch) => {
  dispatch({ type: 'TEARDOWN_JOBS' });
}

export default jobReducer;
