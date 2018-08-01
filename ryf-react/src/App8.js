import React, { Component } from 'react';
import './App.css';


class UserGist extends Component {
  state = {
    username: '',
    lastGisUrl: ''
  }
  render() {
    return (
      <div>
        {this.state.username}'s last gist is <a href={this.state.lastGisUrl}>here</a>
      </div>
    )
  }

  componentDidMount() {
    fetch(this.props.source)
      .then(data => data.json())
      .then(data => {
        const lastGist = data[0];
        this.setState({
          username: lastGist.owner.login,
          lastGisUrl: lastGist.html_url
        })
      })
  }

}

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserGist source="https://api.github.com/user/octocat/gists" />
      </div>
    )
  }
}

export default App;
