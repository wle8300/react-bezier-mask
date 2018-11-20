import React, { Component } from 'react'

import ReactBezierMask from 'react-bezier-mask'

export default class App extends Component {
  render () {
    return (
      <div>
        <ReactBezierMask>
          <img src="https://picsum.photos/300/?random" width="300" height="300" alt="placeholder"/>
        </ReactBezierMask>
      </div>
    )
  }
}
