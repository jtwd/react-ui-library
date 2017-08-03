import React from 'react'

import Panel from '../Panel'
import Button from '../../Button'
import Heading from '../../Heading'

/** Panel headers & footers */
export default function PanelHeaderFooter() {
  const title = <Heading level={2}>Panel title</Heading>
  const SubmitBtn = <Button primary small>Submit</Button>
  return (
    <div>
      <Panel header="Panel header" footer="Panel footer">Panel content</Panel>
      <Panel header={title} footer={SubmitBtn}>Panel content</Panel>
    </div>
  )
}
