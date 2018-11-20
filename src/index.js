import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BezierSquare from './bezier-square.svg'

export default class ReactBezierMask extends Component {

  static props = {
    style: PropTypes.object,
    children: PropTypes.node.isRequired
  }

  render() {

    const style = Object.assign(
      {},
      {
        display: 'inline-flex',
        overflow: 'hidden',
        WebkitMask: `url(${BezierSquare}) 0% 0% / contain no-repeat`,
        mask: `url(${BezierSquare}) 0% 0% / contain no-repeat`,
      },
      this.props.style
    )

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}