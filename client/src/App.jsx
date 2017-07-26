import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Item extends Component {
  constructor(props) {
    // super(props);
    super();
    debugger;
  }
  render() {
    return (<div> 123 </div>)
  }
}
class App extends Component {
  render(){
    return ( 
      <div> 222 
        <Item name="item"/>
      </div>
    );
  }
}

export default App;