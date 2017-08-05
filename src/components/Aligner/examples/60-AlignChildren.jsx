import React from 'react'

import Aligner from '../Aligner'

/** Align children */
export default function AlignerChildren () {
  return (
    <div>
      <div className="docs-ex-title">[top, center, bottom]</div>
      <div className="docs-eg-height3">
        <Aligner alignChildren={['top', 'center','bottom']}>
          <div className="docs-ele1 docs-stretch">Child 1 (top)</div>
          <div className="docs-ele2 docs-stretch">Child 2 (center)</div>
          <div className="docs-ele3 docs-stretch">Child 3 (bottom)</div>
        </Aligner>
      </div>
    </div>
  )
}
