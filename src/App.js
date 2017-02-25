import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import OnClick from './OnClick'

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1> React Learning </h1>
        <OnClick testProp='Yes' />
      </div>
    )
  }
}

export default App
