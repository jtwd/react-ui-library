import React from 'react'

import Aligner from '../Aligner'

/** Stretch children */
export default function AlignerStretch () {
  return (
    <div>
      <div className="docs-eg-height2">
        <Aligner stretch>
          <div className="docs-ele1 docs-stretch">Child 1</div>
          <div className="docs-ele2 docs-stretch">Child 2</div>
        </Aligner>
      </div>
      <div className="docs-eg-height2">
        <Aligner stretch>
          <div className="docs-ele1 docs-stretch">Child 1</div>
          <div className="docs-ele2 docs-stretch">Child 2</div>
          <div className="docs-ele3 docs-stretch">Child 3</div>
          <div className="docs-ele1 docs-stretch">Child 4</div>
          <div className="docs-ele2 docs-stretch">Child 5</div>
          <div className="docs-ele3 docs-stretch">Child 6</div>
        </Aligner>
      </div>
    </div>
  )
}
