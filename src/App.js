import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Tweet from "./Tweet";

function App() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div className="app">
      <Tweet name="Sean" message="This is a random tweet"/>
      <Tweet name="Jack" message="What's up dudes?"/>
      <Tweet name="Jane" message="Having a burger here"/>
      <Tweet name="Ed" message="Cold coffee sucks"/>

      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      </div>
  )
}

export default App;
