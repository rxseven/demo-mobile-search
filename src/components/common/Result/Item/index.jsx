// Module dependencies
import React from 'react';

// Styles
import './styles.scss';

// Component
const Item = props => (
  <div className="card bg-light mb-3">
    <div className="card-body">
      <p className="card-text">{props.item.name}</p>
    </div>
  </div>
);

// Module exports
export default Item;
