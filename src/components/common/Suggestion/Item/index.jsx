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
    const {
      data, group, name, id
    } = this.props.item;
    const isData = !!data;
    const isGroup = !!group;

    // View
    return (
      <li styleName="item">
        <a href={`#${id}`} onClick={this.handleClick} styleName={isData ? 'is-data' : ''}>
          {name}
          <If condition={isGroup}>
            <span className="oi oi-layers" styleName="icon" />
          </If>
        </a>
      </li>
    );
  }
}

// Module exports
export default Item;
