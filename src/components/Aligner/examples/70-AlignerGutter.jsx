import React from 'react'

import Aligner from '../Aligner'

/** Gutter children */
export default function AlignerGutter () {
  return (
    <div>
      <div className="docs-eg-height2">
        <Aligner gutter>
          <div className="docs-ele1">Child 1</div>
          <div className="docs-ele2">Child 2</div>
        </Aligner>
      </div>
      <div className="docs-eg-height2">
        <Aligner gutter>
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
