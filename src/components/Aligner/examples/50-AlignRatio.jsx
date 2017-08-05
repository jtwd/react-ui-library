import React from 'react'

import Aligner from '../Aligner'

/** Ratio multiple children */
export default function AlignerRatio () {
  return (
    <div>
      <div className="docs-ex-title">[1, 2]</div>
      <div className="docs-eg-height2">
        <Aligner ratio={[1, 2]}>
          <div className="docs-ele1 docs-stretch">Child 1 (1)</div>
          <div className="docs-ele2 docs-stretch">Child 2 (2)</div>
        </Aligner>
      </div>
      <div className="docs-ex-title">[3, 9, 4]</div>
      <div className="docs-eg-height2">
        <Aligner ratio={[3,9,4]}>
          <div className="docs-ele1 docs-stretch">Child 1 (3)</div>
          <div className="docs-ele2 docs-stretch">Child 2 (9)</div>
          <div className="docs-ele3 docs-stretch">Child 3 (4)</div>
        </Aligner>
      </div>
    </div>
  )
}
