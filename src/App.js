import React, { Component, useEffect, useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Tweet from "./Tweet";
import SearchBar from "./SearchBar";
import NewPost from "./NewPost";

function App() {

  let [visible, setVisible] = useState(true);

  let postRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!postRef.current.contains(event.target)) {
        setVisible(true);
      }
    })
  });

  
  return (
    <div className="app">

      <div className="search" onClick={() => setVisible((visible) => !visible)}>
        {visible ? <SearchBar /> : null}
      </div>

      <div ref={postRef} className="post">
        {visible ? null : <NewPost />}
      </div>
      
      
      
    </div>
  )
  

  
}

export default App;
