import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App1 extends Component {
  render() {
    const names=['Alice','oyc','曾凯']
    return (
      <div className="App">
        <ul>
          {
            names.map((name,index)=>{
              return (
                <div key={index}>hello,{name}</div>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App1;
