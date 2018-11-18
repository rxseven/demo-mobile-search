// Module dependencies
import React from 'react';

// Components
import Text from 'components/common/Text';

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
        <Choose>
          <When condition={data.length}>
            <h2 styleName="headline">
              Search results{' '}
              {name && (
                <React.Fragment>
                  of <Text highlight>{name}</Text>
                </React.Fragment>
              )}{' '}
              {location && (
                <React.Fragment>
                  in <Text highlight>{location}</Text>
                </React.Fragment>
              )}
            </h2>
            <div>{data.map(this.renderItem)}</div>
          </When>
          <Otherwise>
            <div>
              Your search{' '}
              {name && (
                <React.Fragment>
                  of <Text highlight>{name}</Text>
                </React.Fragment>
              )}{' '}
              {location && (
                <React.Fragment>
                  in <Text highlight>{location}</Text>
                </React.Fragment>
              )}{' '}
              did not match any business.
            </div>
          </Otherwise>
        </Choose>
      </div>
    );
  }
}

// Module exports
export default List;
