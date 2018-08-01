import React, { Component } from 'react';
// import logo from './logo.svg';
import NodeList from './components/NodeList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NodeList>
            <span>hello</span>
            <span>world</span>
          </NodeList>
      </div>
    );
  }
}

export default App;
