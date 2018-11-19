// Module dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components and HOCs
import toJS from 'HOCs/common/toJS';

// Action creators and selectors
import * as searchActions from 'data/search/actions';
import { getSearch } from 'data/search/reducers';

// Relative files
import UI from './UI';

// Map state to props
const mapStateToProps = state => ({
  data: getSearch(state)
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    search: bindActionCreators(searchActions, dispatch)
  }
});

// Connect component to application state
const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(toJS(UI));

// Module exports
export default container;
