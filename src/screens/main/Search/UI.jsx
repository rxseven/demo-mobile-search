// Module dependencies
import React from 'react';

// Shared components
import Autocomplete from 'components/common/Autocomplete';
import Category from 'components/common/Category';
import Keyboard from 'components/common/Keyboard';
import Layout from 'components/common/Layout';
import { Body, Document, Head, Title } from 'components/common/Page';
import Result from 'components/common/Result';
import { Searchbox, SearchboxBody, SearchboxForm } from 'components/common/Searchbox';

// Helper functions
import { filterSearch } from 'helpers/filter';

// Constants
import {
  CATEGORIES,
  CURRENT_LOCATION,
  INPUT_EMPTY,
  RESULTS,
  SEARCH_FIELDS,
  SUGGESTIONS
} from 'dummy';

// Relative components
import Loading from './components/Loading';
import MyLocation from './components/MyLocation';

// Styles
import './styles.scss';

// Component
class Search extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      category: false,
      current: true,
      keyboard: false,
      listing: [],
      loading: false,
      location: INPUT_EMPTY,
      name: props.data.category || INPUT_EMPTY,
      result: false
    };

    // Instance properties
    this.nameInput = React.createRef();
  }

  // Lifecycle hooks
  componentDidMount() {
    // Check pre-selected category
    if (this.props.data.category) {
      // Initialize search form
      this.setCurrentLocation(true);

      // Trigger search functionality
      this.search();

      // Reset selected category
      this.props.actions.search.resetCategory();
    } else if (this.nameInput.current.props.name === SEARCH_FIELDS.name) {
      // Focus Name field
      this.focusInput();
    }
  }

  // Set location
  setLocation = location => this.setState({ location });

  // Set current location
  setCurrentLocation = (force = false) => {
    // Variables
    const { state } = this;

    // Force selection or a location has not set
    if (force || !state.location) {
      this.setLocation(CURRENT_LOCATION);
    }

    // Hide a current location button
    this.toggleCurrent();
  };

  // Filter suggestions
  filterSuggestions = (data, name, location) => {
    // Filter list and update state
    this.setState({ listing: filterSearch(data, { name, location }) });
  };

  // Current location button handler
  handleCurrentLocation = (force) => {
    // Set current location (force selection)
    this.setCurrentLocation(force);

    // Trigger search functionality
    this.search();
  };

  // Search functionality
  search = () => {
    // Reset UI
    this.toggleCategory();
    this.toggleCurrent();
    this.toggleKeyboard();
    this.toggleResult();

    // Fake API call
    this.setState({ loading: true }, () => {
      // Filter suggestions
      this.filterSuggestions(RESULTS, this.state.name, this.state.location);

      // Handle a network response
      setTimeout(() => {
        // Hide a loading spinner
        this.setState({ loading: false });

        // Show results
        this.toggleResult(true);
      }, 800);
    });
  };

  // Select category
  selectCategory = (name) => {
    // Update state, then trigger search functionality
    this.setState({ name }, () => this.search());
  };

  // Select suggestion item
  selectSuggestion = (name, value) => {
    // Update state, then trigger search functionality
    this.setState({ [name]: value }, () => this.search());
  };

  // Check input blur
  checkBlur = (name) => {
    // Do nothing
  };

  // Check input focus
  checkFocus = (name, value) => {
    // Variables
    const { state } = this;

    // Show a virtual keyboard
    this.toggleKeyboard(true);

    // Input field cases
    switch (name) {
      case SEARCH_FIELDS.name:
        // Check input value
        if (!value) {
          // Hide results and show suggested categories
          this.toggleResult();
          this.toggleCategory(true);
        }

        // Check input value and results
        if (value && !this.state.results) {
          // Show suggested categories
          this.toggleCategory(true);
        }

        // Set current location
        this.setCurrentLocation();

        break;
      case SEARCH_FIELDS.location:
        // Reset the current location
        if (state.location === CURRENT_LOCATION) {
          // Clear Location field
          this.setLocation(INPUT_EMPTY);

          // Show a current location button
          this.toggleCurrent(true);

          // Hide sugessted categories
          this.toggleCategory();

          // Hide results
          this.toggleResult();
        }

        // Hide sugessted categories
        this.toggleCategory();

        break;
      default:
      // Do nothing
    }
  };

  // Clear an input values
  clearValue = (name) => {
    // Do nothing
  };

  // Close a virtual keyboard
  closeKeyboard = () => {
    this.toggleKeyboard();
  };

  // Focus an input field
  focusInput = () => this.nameInput.current.focusInput();

  // Toggle suggested categories
  toggleCategory = (state = false) => this.setState({ category: state });

  // Toggle a current location button
  toggleCurrent = (state = false) => this.setState({ current: state });

  // Toggle a virtual keyboard
  toggleKeyboard = (state = false) => this.setState({ keyboard: state });

  // Toggle results
  toggleResult = (state = false) => this.setState({ result: state });

  // Update field value
  updateField = (name, value) => {
    // Update value
    this.setState({ [name]: value });

    // Input field cases
    switch (name) {
      case SEARCH_FIELDS.name:
        if (this.state.result) {
          if (!value) {
            // Show suggested categories
            this.toggleCategory(true);

            // Hide results
            this.toggleResult();
          }
        } else {
          // Show suggested categories
          this.toggleCategory(true);
        }

        break;
      case SEARCH_FIELDS.location:
        if (this.state.result) {
          if (!value) {
            // Show a current location button
            this.toggleCurrent(true);

            // Hide results
            this.toggleResult();
          }
        } else {
          // Show a current location button
          this.toggleCurrent(true);
        }

        break;
      default:
      // Do nothing
    }
  };

  // Render body
  renderBody = () => (
    <React.Fragment>
      <If condition={this.state.current}>
        <MyLocation onClick={this.handleCurrentLocation} />
      </If>
      <If condition={this.state.category}>
        <Category data={CATEGORIES} headline onSelect={this.selectCategory} />
      </If>
      <If condition={this.state.loading}>
        <Loading />
      </If>
      <If condition={this.state.result}>
        <Result data={this.state.listing} location={this.state.location} name={this.state.name} />
      </If>
      <If condition={this.state.keyboard}>
        <Keyboard
          searchable={this.state.location}
          onClick={this.search}
          onClose={this.closeKeyboard}
        />
      </If>
    </React.Fragment>
  );

  // Render form
  renderForm = () => (
    <form>
      <Autocomplete
        filter={this.state.location}
        name={SEARCH_FIELDS.name}
        onBlur={this.checkBlur}
        onChange={this.onChange}
        onClear={this.clearValue}
        onFocus={this.checkFocus}
        onSelect={this.selectSuggestion}
        placeholder="Search by name or category"
        ref={this.nameInput}
        suggestions={SUGGESTIONS.name}
        updateField={this.updateField}
        value={this.state.name}
      />
      <Autocomplete
        default={CURRENT_LOCATION}
        name={SEARCH_FIELDS.location}
        onBlur={this.checkBlur}
        onChange={this.onChange}
        onClear={this.clearValue}
        onFocus={this.checkFocus}
        onSelect={this.selectSuggestion}
        placeholder="Look for specific location"
        suggestions={SUGGESTIONS.location}
        updateField={this.updateField}
        value={this.state.location}
      />
    </form>
  );

  // Render component
  render() {
    return (
      <Document>
        <Head>
          <Title>Search | Search Flow</Title>
        </Head>
        <Body>
          <Layout>
            <Searchbox>
              <SearchboxForm>{this.renderForm()}</SearchboxForm>
            </Searchbox>
            <SearchboxBody>{this.renderBody()}</SearchboxBody>
          </Layout>
        </Body>
      </Document>
    );
  }
}

// Module exports
export default Search;
