import Home from './components/Home'
import './App.css';

import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props);
    this.state = [
      {
        name: "Carmen",
        number: 7293894343,
      },
      {
        name: "Sam",
        number: 7296574643,
      },
      {
        name: "Paulo",
        number: 7527384943,
      },
      {
        name: "Pedro",
        number: 7293894343,
      },
      {
        name: "Carmen",
        number: 7293894343,
      },
    ]

    
  }
  render() {
    return (
      <div className="App">
      <div id="container">
        <Home heading="Call me maybe"/>
      </div>
      
    </div>
    )
  }
}


export default App;
