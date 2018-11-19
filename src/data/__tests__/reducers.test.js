// Reducers
import reducers from '../reducers';

// Tests
describe('data/reducers', () => {
  it('should return the initial state', () => {
    // Assertions
    expect(reducers(undefined, {})).toBeNull();
  });
});
