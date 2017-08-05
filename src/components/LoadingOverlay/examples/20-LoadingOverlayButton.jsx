import React, { Component } from 'react'

import Button from '../../Button'
import LoadingOverlay from '../../LoadingOverlay'
import Aligner from '../../Aligner'

/** Loading Overlay Active - Use: Loading */
export default class LoadingOverlayButton extends Component {
  constructor (props) {
    super(props)

    this.state = {
      Loading: false
    }
  }
  render () {
    const { loading } = this.state

    return (
      <div className="docs-eg-height3">
        <LoadingOverlay active={loading}/>
        <Aligner>
          <Button onClick={() => this.setState({loading: true})}>Show loading overlay</Button>
        </Aligner>
      </div>
    )
  }
}
