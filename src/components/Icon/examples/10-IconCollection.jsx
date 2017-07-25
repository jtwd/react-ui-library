import React from 'react'
import icons from '../../../theme/icons'
import Icon from '../Icon'

/** Collection */
export default function IconCollection () {
  return (
    <div>
      {Object.keys(icons).map(key =>
        <div className="docs-item">
          <Icon icon={key} />
          <div>{key}</div>
        </div>
      )}
    </div>
  )
}
