export const initialState = {
  job: {},
  company: {},
  contact: {},
}

export function reducer(state, action) {
  switch (action.type) {
    case 'SET_JOB':
      return { ...state, job: { ...state.job, [action.data[0]]: action.data[1] } };
    case 'SET_COMPANY':
      return { ...state, company: { ...state.company, [action.data[0]]: action.data[1] } };
    case 'SET_CONTACT':
      return { ...state, contact: { ...state.contact, [action.data[0]]: action.data[1] } };
    default:
      return state;
  }
}