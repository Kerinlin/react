import React, { Component } from 'react';
class NodeList extends Component {
    // constructor(props){
    //   super(props)
    // }
    render(){
      return(
        <ol>
          {this.props.children.map((child,index)=>
            <li key={index}>{child}</li>
          )}
        </ol>
      )
    }
}

export default NodeList