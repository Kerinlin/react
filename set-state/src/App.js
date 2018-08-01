import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    let me = this;
    me.setState({
      count: me.state.count +6
    });
    console.log(me.state.count);    // 打印
    me.setState({
      count: me.state.count + 4
    });
    console.log(me.state.count);    // 打印
    setTimeout(function () {
      me.setState({
        count: me.state.count + 1
      });
      console.log(me.state.count);   // 打印
    }, 5000);
    setTimeout(function () {
      me.setState({
        count: me.state.count + 1
      });
      console.log(me.state.count);   // 打印
    }, 2000);
  }
  render() {
    return (
      <h1>{this.state.count}</h1>
    )
  }
}

export default App;
