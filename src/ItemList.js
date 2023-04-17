//add a funtion to list elements
import React from 'react';
function ItemList({items}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
export default ItemList;
// End of src/ItemList.js