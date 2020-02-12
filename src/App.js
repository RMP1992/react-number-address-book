import './App.css';
import React, { Component } from 'react'

class App extends Component {
  state = {
    input:[],
    userValue: "",
  }
  
  search = (event)=>{
    this.setState({userValue: event.target.value})
    console.log(this.state.userValue)
  }
  archive = () =>{
    this.setState({input:[...this.state.input, this.state.userValue]})
    console.log(this.state.input)
  }
  
  render() {
    const allinputs = this.state.input.map( input => {return <h2>{input}</h2>})
    return (
      <div>
            <div id="heading">
                <h1>Call me maybe</h1>
            </div>
            <div className='userInput'>
                
                <input id="input" value= {this.state.value} onChange={this.search}/>
                
            </div>
            <div id='btn-container'>
                <button id="submit" onClick={this.archive}>Submit</button>
            </div>
            <div id="para-container">
                {allinputs}
            </div>
        </div>
    )
  }
}


export default App;
