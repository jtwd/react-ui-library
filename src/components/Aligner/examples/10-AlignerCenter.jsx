import React from 'react'

import Aligner from '../Aligner'

/** Aligner center */
export default function AlignerCenter () {
  return (
    <div>
      <div className="docs-eg-height3">
        <Aligner>
          <div className="docs-eg2">Centered</div>
        </Aligner>
      </div>
      <div className="docs-eg-height3">
        <Aligner>
          <div className="docs-ele2">Child 1</div>
          <div className="docs-ele2">Child 2</div>
        </Aligner>
      </div>
    </div>
  )
}
