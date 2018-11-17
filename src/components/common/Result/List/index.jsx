// Module dependencies
import React from 'react';

// Relative components
import Item from '../Item';

// Styles
import './styles.scss';

// Component
class List extends React.Component {
  // Render list item
  renderItem = item => <Item item={item} key={item.id} onClick={this.props.onSelect} />;

  // Render component
  render() {
    // Variables
    const { data, location, name } = this.props;

    // View
    return (
      <div styleName="wrapper">
        <h2 styleName="headline">
          Search results {name && `of ${name}`} {location && `in ${location}`}
        </h2>
        <div>{data.map(this.renderItem)}</div>
      </div>
    );
  }
}

// Module exports
export default List;
