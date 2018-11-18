// Module dependencies
import React from 'react';

// Relative components
import Item from '../Item';

// Styles
import './styles.scss';

// Component
class List extends React.Component {
  // Render list item
  renderItem = (item) => {
    // Variables
    const { name, onSelect } = this.props;

    // View
    return <Item item={item} key={item.id} name={name} onClick={onSelect} />;
  };

  // Render component
  render() {
    // Variables
    const {
      data, onMouseOff, onMouseOn, visibility
    } = this.props;

    // View
    return (
      <If condition={visibility && data.length}>
        <ul onMouseEnter={onMouseOn} onMouseLeave={onMouseOff} styleName="suggestion">
          {data.map(this.renderItem)}
        </ul>
      </If>
    );
  }
}

// Module exports
export default List;
