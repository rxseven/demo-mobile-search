// Module dependencies
import { map } from 'ramda';
import { all, fork } from 'redux-saga/effects';

// Combine sagas
const sagas = {};

// Root saga
function* root() {
  yield all(map(fork, sagas));
}

// Module exports
export default root;
