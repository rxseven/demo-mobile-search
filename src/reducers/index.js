// Module dependencies
import { combineReducers } from 'redux-immutable';

// Reducers
import data from 'data/reducers';
import screens from 'screens/reducers';

// Combine reducers
const reducer = combineReducers({
  data,
  screens
});

// Module exports
export default reducer;
