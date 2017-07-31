import React from 'react'

import PageHeader from '../PageHeader'
import Icon from '../../Icon'

export default function PageHeaderStandard() {
  const IconTitle = <span><Icon icon="lock" large /> A icon page title <small>with some sub-title text</small></span>
  return (
    <div>
      <PageHeader title="A standard page header" />
      <PageHeader title={IconTitle} />
      <PageHeader title="Page header with some extra content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, delectus dolor dolore dolorem doloribus expedita id.</p>
      </PageHeader>
    </div>
  )
}
