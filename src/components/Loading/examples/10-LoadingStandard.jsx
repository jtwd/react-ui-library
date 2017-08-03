import React from 'react'

import Loading from '../../Loading'

/** Sizes */
export default function LoadingStandard() {
  return (
    <div>
      <Loading size="small" />
      <Loading />
      <Loading size="large" />
    </div>
  )
}
