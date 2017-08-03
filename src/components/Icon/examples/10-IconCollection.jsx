import React from 'react'

import icons from '../../_theme/icons'
import Icon from '../Icon'

/** Collection */
export default function IconCollection () {
  return (
    <div>
      {Object.keys(icons).map(key =>
        <div key={`icon_${key}`} className="docs-item">
          <Icon icon={key} />
          <div className="docs-item-title">{key}</div>
        </div>
      )}
    </div>
  )
}
