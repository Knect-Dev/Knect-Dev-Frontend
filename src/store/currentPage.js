const initialState = {
  currentPage: '',
};

const currentPageReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'SET_CURRENT_PAGE':
      return { currentPage: payload };

    default:
      return state;
  }
};

//get job
export const setCurrentPage = (currentPage) => {
  console.log(">>>>>>>>>>>>", currentPage)
  return {
    type: 'SET_CURRENT_PAGE',
    payload: currentPage,
  };
};


export default currentPageReducer;