import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tweet from "./Tweet";

function App() {
  return (
    <div className="app">
      <Tweet name="Sean"/>
      <Tweet name="Jack"/>
      <Tweet name="Jane"/>
      <Tweet name="Ed"/>
      </div>
  )
}

export default App;
