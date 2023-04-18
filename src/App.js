import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './UI/Views/HelloWorld/Hello-World';
import ItemList from './UI/Views/ItemList/ItemList';
import CustomButton from './UI/components/CustomButton/CustomButton';

function App() {
  const [items, setItems] = useState(['Type a word or emoji', 'to be added', 'in this list']);
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
        <CustomButton onClick={addItem}>Surprise me</CustomButton>

        <ItemList items={items} />

      </header>
    </div>
  );
}


export default App;
