import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import userReducer from './user.js';
import jobReducer from './jobs.js';
import companiesReducer from './companies.js';
import contactsReducer from './contacts.js';
import currentPageReducer from './currentPage.js';
import searchReducer from './search.js';

const reducers = combineReducers({
  user: userReducer,
  jobs: jobReducer,
  companies: companiesReducer,
  contacts: contactsReducer,
  currentPage: currentPageReducer,
  search: searchReducer,
});

const createReduxStore = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default createReduxStore;
