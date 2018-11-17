// Module dependencies
import React from 'react';

// Styles
import './styles.scss';

// Component
class CategoryItem extends React.Component {
  // Click handler
  handleClick = (event) => {
    // Prevent a browser from being refreshed
    event.preventDefault();

    // Select item
    this.props.onClick(this.props.item.name);
  };

  // Render component
  render() {
    // Variables
    const classes = 'list-group-item list-group-item-action';

    // View
    return (
      <a className={classes} href="#item" onClick={this.handleClick}>
        {this.props.item.name}
      </a>
    );
  }
}

// Module exports
export default CategoryItem;
