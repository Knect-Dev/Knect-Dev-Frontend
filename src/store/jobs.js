import axios from 'axios';

// Backend
const JOB_URL = '';

const initialState = {
  jobs: [
    {
      id: '0',
      company: 'Microsoft',
      title: '500',
      jobId: '1234re',
      jobUrl: 'someurl.com',
      appliedDate: '03/16/2022',
      stage: 'Not Applied',
      status: 'active',
      openPositions: '10',
      location: 'Seattle, WA',
      technologies: 'JavaScript, .NET',
      targeted: '',
      offer: '',
      notes: 'Notes here!',
    },
    {
      company: 'Amazon',
      title: 'burger flipper',
      jobId: '8098',
      appliedDate: '',
      stage: 'Applied',
      status: 'active',
      location: 'Seattle',
      technologies: 'Spatula, Grill',
      offer: '',
      notes:'Low-stress' 
    },
    {
      company: 'Boogie Woogie',
      title: 'Dancer',
      jobId: '',
      appliedDate: '',
      stage: 'tech Interview',
      status: 'Inactive',
      location: 'Seattle',
      technologies: '',
      offer: '',
      notes:'No compensation but great vibes' 
    },
    {
      company: 'Charlie\'s Chocolates',
      title: 'Chocolatier',
      jobId: '',
      appliedDate: '',
      stage: 'Offer',
      status: '',
      location: '',
      technologies: '',
      offer: '',
      notes:'' 
    },
    {
      company: 'Decks on Decks',
      title: 'Installer',
      jobId: '',
      appliedDate: '',
      stage: 'phone screen',
      status: 'Active',
      location: '',
      technologies: '',
      offer: '',
      notes:'' 
    },
    {
      company: 'Everyone Shops Here',
      title: 'Developer',
      jobId: '',
      appliedDate: '',
      stage: 'onsite',
      status: '',
      location: '',
      technologies: '',
      offer: '',
      notes:'' 
    },
    {
      company: 'Faith, Hope, & Love',
      title: 'Software Developer',
      jobId: '',
      appliedDate: '',
      stage: 'onsite',
      status: '',
      location: '',
      technologies: '',
      offer: '',
      notes:'' 
    },
    {
      company: 'Golf Goobers',
      title: 'Caddy',
      jobId: '',
      appliedDate: '2/24/22',
      stage: 'Onsite',
      status: '',
      location: 'Atlanta',
      technologies: '',
      offer: 'lotsa money',
      notes:'' 
    },
    {
      company: 'Hotel Hotel',
      title: 'Bartender',
      jobId: '',
      appliedDate: '3/22/22',
      stage: '',
      status: '',
      location: 'Seattle',
      technologies: '',
      offer: '',
      notes:'' 
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
