import React, { Component } from 'react'

export default class OnClick extends Component {

  componentDidMount () {
    console.log('PROPS', this.props)
  }

  onClick (params) {
    console.log('onClick executed', params)
    console.log('this', this)
  }

  onClickReturningFunction (params) {
    console.log('Params outer function', params)
    return function (params) {
      console.log('Params inner function', params)
    }
  }

  render () {
    const params = {language: 'javascript'}
    return (
      <div>
        <div>
          <strong>{params.language}</strong>
        </div>
        <br />
        <div onClick={this.onClick()}>
          OnClick with function executing right away when rendered.
        </div>
        <br />
        {/* 'this' refers to the component */}
        <div onClick={() => this.onClick}>
          onClick passing a function to onClick prop
        </div>
        <br />
        <div onClick={this.onClickReturningFunction(params)}>
          onClickReturningFunction
        </div>
        <br />
        <br />
        <div onClick={this.onClick.bind(this, params)}>
          <strong>.bind(this, params)</strong>
          <br />
          Here the function is bounded to the onClick function
        </div>
        <br />
        <br />
        <div onClick={this.onClick}>
          <br />
          onClick without binding
        </div>
      </div>
    )
  }

}
