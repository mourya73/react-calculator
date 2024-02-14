import React, { useState } from 'react';
import './App.css';
import Display from './personal_components/Display'; // Import Display component
import Keypad from './personal_components/Keypad'; // Import Keypad component

function App() {
  const [input, setInput] = useState('');

  // Handle input
  function handleInput(e) {
    setInput(input + e.target.name); //adding the value of the button clicked to the input
  }

  // Calculate the result
  function calculate() {
    try {
      setInput(eval(input).toString()); // eval is used to evaluate the input string as a JavaScript expression and then convert the result to a string
    } catch (error) {
      setInput('Error');
    }
  }

  // Clear the input
  function clear() {
    setInput('');
  }

  return (
    <div className="App">
      <div className="calculator-container">
        <h1>Simple Calculator</h1>
        <Display input={input} />
        <Keypad onInput={handleInput} onCalculate={calculate} onClear={clear} />
    </div>
    </div>
  );
}

export default App;
