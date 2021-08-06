import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Tweet from "./Tweet";
import SearchBar from "./SearchBar";
import NewPost from "./NewPost";

class App extends Component {

  constructor() {
    super();
    this.state = {
      visible: false
    }
  }


  render() {
    return (
      <div className="app">
        <div className="search" onClick={() => {this.setState({visible: true})}}>
        {this.state.visible ? null : <SearchBar />}
        </div>
        {this.state.visible ? <NewPost /> : null}
        
        <Tweet name="Sean" message="This is a random tweet"/>
        <Tweet name="Jack" message="What's up dudes?"/>
        
      </div>
    )
  }

  
}

export default App;
