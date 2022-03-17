const initialState = 'Lima';

const searchReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'SET_SEARCH':
      let updatedSearch = payload;
      return { search: updatedSearch };
    case 'CLEAR_SEARCH':
      return { search: '' };
    default:
      return state;
  }
};



//get search
export const setSearch = (search) => {
  return {
    type: 'SET_SEARCH',
    payload: search,
  };
};

export const clearSearch = () => {
  return {
    type: 'CLEAR_SEARCH',
    payload: null
    // TEST does this work without payload?
  }
}

export default searchReducer;