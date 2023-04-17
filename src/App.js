import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello-World';
import ItemList from './ItemList';

function App() {
  const [items, setItems] = useState([ 'Type a word or emoji', 'to be added', 'in this list' ]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue('');
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <input type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        onKeyPress={handleKeyPress}
        placeholder="Add an item"
        />
        <button onClick={addItem}>Add Item</button>
        <ItemList items={items} />

      </header>
    </div>
  );
}


export default App;
