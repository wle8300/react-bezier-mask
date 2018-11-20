import React, { Component } from 'react'

import ReactBezierMask from 'react-bezier-mask'

export default class App extends Component {
  render () {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100vw', height: '100vh', background: 'black'}}>
        <ReactBezierMask>
          <img src="https://picsum.photos/300/?random" width="300" height="300" alt="placeholder"/>
        </ReactBezierMask>
        <div style={{marginTop: '2rem', color: 'white'}}>refresh page to see a different image</div>
      </div>
    )
  }
}
