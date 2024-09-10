// Item.jsx
import React from 'react';
import './Item.css'; // Import CSS for Item component

export const Item = (props) => {
  return (
    <div className='item'>
      <img className='item-image' src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <div className="Pet-price">
        <div className="pet-price-new">
          {props.new_price}
          <div className="pet-price-old">{props.old_price}</div>
        </div>
      </div>
    </div>
  );
};
