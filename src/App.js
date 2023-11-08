import React, { useState } from 'react';
import './App.css';

function CalButton({ label, onClick }) {
  return (
    <button className="CalButton" onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

function CalcDisplay({ expression }) {
  return (
    <div className='CalcDisplay'>
      {expression}
    </div>
  );
}

function App() {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    switch (value) {
      case '=':
        calculate();
        break;
      case 'C':
        clearDisplay();
        break;
      default:
        appendValue(value);
        break;
    }
  };

  const appendValue = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const clearDisplay = () => {
    setExpression('');
  };

  const calculate = () => {
    try {
      let result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  return (
    <div className='CalcContainer'>
      <h1 className="Header">Calculator of Vien C Cabrera IT3A</h1>
      <CalcDisplay expression={expression} />
      <div className='ButtonContainer'>
        <CalButton label={7} onClick={handleButtonClick} />
        <CalButton label={8} onClick={handleButtonClick} />
        <CalButton label={9} onClick={handleButtonClick} />
        <CalButton label={"/"} onClick={handleButtonClick} />
        <CalButton label={4} onClick={handleButtonClick} />
        <CalButton label={5} onClick={handleButtonClick} />
        <CalButton label={6} onClick={handleButtonClick} />
        <CalButton label={"*"} onClick={handleButtonClick} />
        <CalButton label={1} onClick={handleButtonClick} />
        <CalButton label={2} onClick={handleButtonClick} />
        <CalButton label={3} onClick={handleButtonClick} />
        <CalButton label={"-"} onClick={handleButtonClick} />
        <CalButton label={"C"} onClick={handleButtonClick} />
        <CalButton label={0} onClick={handleButtonClick} />
        <c><CalButton label={"="} onClick={handleButtonClick} /></c>
        <CalButton label={"+"} onClick={handleButtonClick} />
      </div>
      <div className="ButtonContainer">
      <CalButton label={"CABRERA"} onClick={() => {}} />
      </div>
    </div>
  );
}

export default App;