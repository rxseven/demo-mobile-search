// Module dependencies
import React from 'react';

// Styles
import './styles.scss';

// Component
class MyLocation extends React.Component {
  // Click handler
  handleClick = () => this.props.onClick(true);

  // Render component
  render() {
    return (
      <span styleName="cta-wrapper">
        <button
          className="btn btn-light btn-block"
          onClick={this.handleClick}
          styleName="cta"
          type="button"
        >
          <span className="oi oi-map-marker" styleName="icon" /> My location
        </button>
      </span>
    );
  }
}

// Module exports
export default MyLocation;
