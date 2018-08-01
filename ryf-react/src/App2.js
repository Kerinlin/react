import React, { Component } from 'react';
// import logo from './logo.svg';
import HelloMessage from './components/HelloMessage'
import './App.css';

class App1 extends Component {
  render() {
    const str=[
      <h1 key="1">Hello</h1>,
      <h2 key="2">world</h2>
    ]
    return (
      <div className="App">
          <HelloMessage name="john"></HelloMessage>
      </div>
    );
  }
}

export default App1;
