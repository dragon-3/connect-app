import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Tweet from "./Tweet";
import SearchBar from "./SearchBar";
import NewPost from "./NewPost";

function App() {

  let [visible, setVisible] = useState(true);

  
    return (
      <div className="app">
        <div className="search" onClick={() => setVisible((visible) => !visible)}>
        {visible ? <SearchBar /> : null}
        </div>
        {visible ? null : <NewPost />}
        
        <Tweet name="Sean" message="This is a random tweet"/>
        <Tweet name="Jack" message="What's up dudes?"/>
        
      </div>
    )
  

  
}

export default App;
