// Module dependencies
import React from 'react';

// Styles
import './styles.scss';

// Component
const Item = (props) => {
  // Variables
  const { category, name, location } = props.item;

  // View
  return (
    <div className="card bg-light mb-3">
      <div className="card-body">
        <h5 className="card-title" styleName="headline">
          {name}
        </h5>
        <ul styleName="details">
          <li styleName="txt-category">{category}</li>
          <li styleName="txt-opening">Opening Hour 08:00 - 22:00</li>
          <li styleName="txt-description">Authentic food and decoration. I..</li>
        </ul>
      </div>
      <div className="card-footer text-muted">{location}</div>
    </div>
  );
};

// Module exports
export default Item;
