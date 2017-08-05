import React from 'react'

import Aligner from '../Aligner'

/** Aligner center */
export default function AlignerCenter () {
  return (
    <div>
      <div className="docs-eg-height2">
        <Aligner>
          <div className="docs-ele1">Centered</div>
        </Aligner>
      </div>
      <div className="docs-eg-height2">
        <Aligner>
          <div className="docs-ele1">Child 1</div>
          <div className="docs-ele2">Child 2</div>
        </Aligner>
      </div>
      <div className="docs-eg-height2">
        <Aligner fixed>
          <div className="docs-ele1">Child 1</div>
          <div className="docs-ele2">Child 2</div>
        </Aligner>
      </div>
      <div className="docs-eg-height2">
        <Aligner stretch>
          <div className="docs-ele1 docs-stretch">Child 1</div>
          <div className="docs-ele2 docs-stretch">Child 2</div>
        </Aligner>
      </div>
      <div className="docs-eg-height2">
        <Aligner stretch ratio={[1,4]}>
          <div className="docs-ele1 docs-stretch">Child 1</div>
          <div className="docs-ele2 docs-stretch">Child 2</div>
        </Aligner>
      </div>
      <div className="docs-eg-height2">
        <Aligner ratio={[1,4,1]}>
          <div className="docs-ele1 docs-stretch">Child 1</div>
          <div className="docs-ele2 docs-stretch">Child 2</div>
          <div className="docs-ele3 docs-stretch">Child 3</div>
        </Aligner>
      </div>
    </div>
  )
}
