// Module dependencies
import React from 'react';

// Styles
import './styles.scss';

// Component
const Item = (props) => {
  // Variables
  const { name, location } = props.item;

  // View
  return (
    <div className="card bg-light mb-3">
      <div className="card-body">
        <p className="card-text">{name}</p>
      </div>
      <div className="card-footer text-muted">{location}</div>
    </div>
  );
};

// Module exports
export default Item;
