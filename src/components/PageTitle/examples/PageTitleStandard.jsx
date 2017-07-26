import React from 'react'
import PageTitle from '../PageTitle'
import Icon from '../../Icon'

export default function PageTitleStandard() {
  const IconTitle = <span><Icon icon="lock" large /> A icon page title <small>with some sub-title text</small></span>
  return (
    <div>
      <PageTitle title="A standard page title" />
      <PageTitle title={IconTitle} />
      <PageTitle title="Page title with some extra content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, delectus dolor dolore dolorem doloribus expedita id.</p>
      </PageTitle>
    </div>
  )
}