// Module dependencies
import { Map } from 'immutable';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from 'reducers';
import saga from 'sagas';

// Initialize middleware
const sagaMiddleware = createSagaMiddleware();

// Initialize state
const initialState = Map();

// Store configuration
const configureStore = () => {
  // Create store
  const store = createStore(
    reducer,
    initialState,
    compose(
      // Middleware
      applyMiddleware(sagaMiddleware),

      // Redux DevTools Extension
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  // Run middleware
  sagaMiddleware.run(saga);

  // Check if Webpack Hot Module Replacement is enabled
  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      // Enable HMR by accepting update of dependency
      module.hot.accept('../reducers', () => {
        // Replaces the reducer currently used by the store to calculate the state
        store.replaceReducer(reducer);
      });
    }
  }

  // Return store configuration
  return store;
};

// Module exports
export default configureStore;
