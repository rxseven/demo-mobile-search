// Module dependencies
import React from 'react';

// Components
import Fixed from 'components/common/Fixed';
import Text from 'components/common/Text';

// Relative components
import Item from '../Item';

// Styles
import './styles.scss';

// Component
class List extends React.Component {
  // Initial state
  state = {
    name: this.props.name,
    location: this.props.location
  };

  // Render list item
  renderItem = item => <Item item={item} key={item.id} />;

  // Render component
  render() {
    // Variables
    const { data } = this.props;
    const { location, name } = this.state;

    // View
    return (
      <div styleName="wrapper">
        <Choose>
          <When condition={data.length}>
            <div styleName="title">
              <Fixed>
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
              </Fixed>
            </div>
            <div styleName="list">{data.map(this.renderItem)}</div>
          </When>
          <Otherwise>
            <div styleName="title">
              <Fixed>
                <h2 styleName="headline">
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
                </h2>
              </Fixed>
            </div>
          </Otherwise>
        </Choose>
      </div>
    );
  }
}

// Module exports
export default List;
