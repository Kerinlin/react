import React, { Component } from 'react';
// import logo from './logo.svg';
// import NodeList from './components/NodeList'
import PropTypes from 'prop-types'
import './App.css';
class MyTitle extends Component{
  render() {
    return(
        <h1>{this.props.title}</h1>
    )
  }
}
MyTitle.propTypes={
  title:PropTypes.number
}
class App extends Component {
  render() {
    const data=123;
    return (
      <div className="App">
        <MyTitle title={data}></MyTitle>
      </div>
    )
  }
}

export default App;
