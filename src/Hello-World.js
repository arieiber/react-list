import React, { useState } from 'react';

function Hello() {
  const [name, setName] = useState('');

  const handleClick = () => {
    setName('A React-Sunshine User');
  };

  return (
    <div>
      <h1>Hello, {name || 'welcome user'}!</h1>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default Hello;
// End of src/Hello-World.js



