// @flow
// Module dependencies
import * as React from 'react';

import { delay } from 'helpers/utilities';

// Constants
import HTML from 'constants/elements/html';

// Styles
import './styles.scss';

// Types
type Props = { children: React.Node };
type Return = React.Node;
type State = { visibility: string };

// Component
class Wrapper extends React.Component<Props, State> {
  // Initial state
  state = { visibility: 'invisible' };

  // After a component is mounted...
  componentDidMount() {
    // Set visibility after FOUC has gone
    delay(this.onVisible, 200);
  }

  // Set visibility
  onVisible = () => {
    this.setState(() => ({ visibility: 'visible' }));
  };

  // Render component
  render(): Return {
    return (
      <div className={this.state.visibility} id={HTML.wrapper} styleName="container">
        {this.props.children}
      </div>
    );
  }
}

// Module exports
export default Wrapper;
