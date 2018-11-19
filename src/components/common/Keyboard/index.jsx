// Module dependencies
import React from 'react';

// Shared components
import Fixed from 'components/common/Fixed';

// Styles
import './styles.scss';

// Component
class Keyboard extends React.Component {
  // Click handler
  handleClick = () => this.props.onClick();

  // Close handler
  handleClose = (event) => {
    // Prevent a browser from being refreshed
    event.preventDefault();

    // Close a virtual keyboard
    this.props.onClose();
  };

  // Render component
  render() {
    return (
      <div styleName="wrapper">
        <Fixed>
          <div styleName="content">
            <h2 styleName="headline">Virtual Keyboard</h2>
            <button
              className="btn btn-light btn-sm"
              disabled={!this.props.searchable}
              onClick={this.handleClick}
              type="button"
            >
              <span className="oi oi-magnifying-glass" /> Search
            </button>
            <a href="#close" onClick={this.handleClose} styleName="close">
              <span className="oi oi-chevron-bottom" />
            </a>
          </div>
        </Fixed>
      </div>
    );
  }
}

// Module exports
export default Keyboard;
