import React from 'react'

import Panel from '../Panel'

/** Panel types - primary, secondary, danger */
export default function PanelTypes() {
  return (
    <div>
      <Panel primary>Primary panel content</Panel>
      <Panel primary header="Panel header" footer="Panel footer">Primary panel content</Panel>
      <Panel secondary>Secondary panel content</Panel>
      <Panel secondary header="Panel header" footer="Panel footer">Secondary panel content</Panel>
      <Panel danger>Danger panel content</Panel>
      <Panel danger header="Panel header" footer="Panel footer">Danger panel content</Panel>
    </div>
  )
}
