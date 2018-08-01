import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
class LikeButton extends Component {
  state = {
    liked: false
  }
  render(){
    const text = this.state.liked ? 'like' : 'don\'t like';
    return(
      <p onClick={()=>this.handleClick()}>you {text} this.click to toggle</p>
    )
  }
}
class App extends Component {
  handleClick() {
    // this.refs.myTextInput.focus()
    console.log(this);
    this.setState({
      liked:!this.state.liked
    })
    
  }
  render() {
    return (
      <div className="App">
        <LikeButton></LikeButton>
        <input type="text" ref="myTextInput"/>
        <input type="button" value="focus the text input" onClick={this.handleClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
