// Module dependencies
import React from 'react';

// Helper functions
import { filterInput } from 'helpers/filter';

// Shared components
import Suggestion from 'components/common/Suggestion';

// Styles
import './styles.scss';

// Constants
const INPUT_EMPTY = '';

// Component
class Autocomplete extends React.Component {
  // Lifecycle hooks
  static getDerivedStateFromProps(props, state) {
    // Update input value
    return { value: props.value };
  }

  // Constructor
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      clearButton: false,
      clearButtonHover: false,
      data: [],
      suggestions: false,
      suggestionsHover: false,
      value: props.value || INPUT_EMPTY
    };

    // Instance properties
    this.Input = React.createRef();
  }

  // Lifecycle hooks
  componentDidMount() {
    // Add event listeners
    document.addEventListener('keydown', this.checkEscape, false);
  }

  componentWillUnmount() {
    // Remove event listeners
    document.removeEventListener('keydown', this.checkEscape, false);
  }

  // onBlur handler
  handleBlur = (event) => {
    // Hide clear button
    if (!this.state.clearButtonHover) {
      this.toggleClearButton(false);
    }

    // Hide autocomplete
    if (!this.state.suggestionsHover) {
      this.toggleSuggestion();
    }

    // Return a target component
    this.props.onBlur(event.target.name);
  };

  // onChange handler
  handleChange = (event) => {
    // Variables
    const { name, value } = event.target;

    // Update input value
    this.setState({ value });

    // Filter suggestions
    this.filterSuggestions(value);

    // Update field value in the parent component
    this.props.updateField(name, value);

    // Toggle clear button
    this.toggleClearButton(value);

    // Toggle autocomplete
    this.toggleSuggestion(!!value);
  };

  // onFocus handler
  handleFocus = (event) => {
    // Variables
    const { name, value } = event.target;

    // Toggle clear button
    this.toggleClearButton(value === this.props.default ? false : value);

    // Return a target component
    this.props.onFocus(name, value);
  };

  // onMouseLeave handler
  handleOnMouseLeave = () => this.hoverOff('clearButtonHover');

  // onMouseEnter handler
  handleOnMouseEnter = () => this.hoverOn('clearButtonHover');

  // onSelect handler
  handleSelect = (name, value) => {
    // Hide autocomplete
    this.toggleSuggestion();

    // Select suggestion item
    this.props.onSelect(name, value);

    // Reset hover state
    this.setState({ suggestionsHover: false });
  };

  // Mouse off handler
  hoverOff = target => this.setState({ [target]: false });

  // Mouse on handler
  hoverOn = target => this.setState({ [target]: true });

  // Check Escape key
  checkEscape = (event) => {
    if (event.keyCode === 27) {
      // Hide autocomplete
      this.toggleSuggestion();
    }
  };

  // Clear input value
  clearValue = (event) => {
    // Configuration
    const { name } = this.Input.current;
    const value = INPUT_EMPTY;

    // Update input value
    this.setState({ value });

    // Update field value in the parent component
    this.props.updateField(name, value);

    // Focus input
    this.focusInput();

    // Toggle clear button
    this.toggleClearButton(value);

    // Hide autocomplete
    this.toggleSuggestion();

    // Reset hover states
    this.setState({ clearButtonHover: false, suggestionsHover: false });
  };

  // Filter suggestions
  filterSuggestions = (value) => {
    // Filter
    const data = filterInput(
      this.props.suggestions,
      { filter: this.props.filter || false, value },
      'name'
    );

    // Update state
    this.setState({ data });
  };

  // Focus the text input using the raw DOM API
  focusInput = () => this.Input.current.focus();

  // Toggle clear button
  toggleClearButton = value => this.setState({ clearButton: !!value });

  // Toggle suggestion
  toggleSuggestion = (state = false) => this.setState({ suggestions: state });

  // Render component
  render() {
    // Variables
    const { name, placeholder } = this.props;
    const {
      clearButton, data, suggestions, value
    } = this.state;

    // Elements
    return (
      <div styleName="input-set">
        <div styleName="wrapper">
          <input
            className="form-control"
            name={name}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            placeholder={placeholder}
            ref={this.Input}
            type="text"
            value={value}
          />
          <If condition={clearButton}>
            <span
              aria-hidden="true"
              className="oi oi-circle-x"
              onClick={this.clearValue}
              onMouseEnter={this.handleOnMouseEnter}
              onMouseLeave={this.handleOnMouseLeave}
              styleName="button-clear"
              title="Clear"
            />
          </If>
        </div>
        <Suggestion
          data={data}
          name={name}
          onMouseOff={this.hoverOff}
          onMouseOn={this.hoverOn}
          onSelect={this.handleSelect}
          visibility={suggestions}
        />
      </div>
    );
  }
}

// Module exports
export default Autocomplete;
