// Module dependencies
import React from 'react';

// Styles
import './styles.scss';

// Component
class Item extends React.Component {
  // Click handler
  handleClick = (event) => {
    // Variables
    const { item, name } = this.props;

    // Prevent a browser from being refreshed
    event.preventDefault();

    // Select item
    this.props.onClick(name, item.name);
  };

  // Render component
  render() {
    // Variables
    const { name, id } = this.props.item;

    // View
    return (
      <li styleName="item">
        <a href={`#${id}`} onClick={this.handleClick}>
          {name}
        </a>
      </li>
    );
  }
}

// Module exports
export default Item;
