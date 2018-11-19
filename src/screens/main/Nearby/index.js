// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Action creators and selectors
import * as searchActions from 'data/search/actions';

// Relative files
import UI from './UI';

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    search: bindActionCreators(searchActions, dispatch)
  }
});

// Connect component to application state
const container = connect(
  null,
  mapDispatchToProps
)(UI);

// Module exports
export default container;
