import React from 'react'

import Aligner from '../Aligner'

/** Fixed multiple children (no flex) */
export default function AlignerFixed () {
  return (
    <div>
      <div className="docs-eg-height2">
        <Aligner fixed>
          <div className="docs-ele1">Child 1</div>
          <div className="docs-ele2">Child 2</div>
        </Aligner>
      </div>
      <div className="docs-eg-height2">
        <Aligner fixed>
          <div className="docs-ele1">Child 1</div>
          <div className="docs-ele2">Child 2</div>
          <div className="docs-ele3">Child 3</div>
          <div className="docs-ele1">Child 4</div>
        </Aligner>
      </div>
    </div>
  )
}
