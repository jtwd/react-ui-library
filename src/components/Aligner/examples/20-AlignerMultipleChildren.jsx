import React from 'react'

import Aligner from '../Aligner'

/** Multiple children */
export default function AlignerMultipleChildren () {
  return (
    <div>
      <div className="docs-eg-height2">
        <Aligner>
          <div className="docs-ele1">Child 1</div>
          <div className="docs-ele2">Child 2</div>
        </Aligner>
      </div>
      <div className="docs-eg-height2">
        <Aligner>
          <div className="docs-ele1">Child 1</div>
          <div className="docs-ele2">Child 2</div>
          <div className="docs-ele3">Child 3</div>
          <div className="docs-ele1">Child 4</div>
          <div className="docs-ele2">Child 5</div>
          <div className="docs-ele3">Child 6</div>
        </Aligner>
      </div>
    </div>
  )
}
