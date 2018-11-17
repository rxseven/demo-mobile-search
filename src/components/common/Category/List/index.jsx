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
    const { data, headline } = this.props;

    // View
    return (
      <div styleName="wrapper">
        <If condition={headline}>
          <h2 styleName="headline">Suggested categories</h2>
        </If>
        <ul className="list-group">{data.map(this.renderItem)}</ul>
      </div>
    );
  }
}

// Module exports
export default List;
