import React from 'react'

import StatPanel from '../StatPanel'

const stats = [
  {
    statDesc: 'Number of something within a parameter',
    statValue: '1,334'
  },
  {
    statDesc: 'Parameters in something',
    statValue: '34'
  },
  {
    statDesc: 'Total number of something',
    statValue: '12,634'
  }
]

export default function StatPanelStandard() {
  return (
    <StatPanel title="Some very interesting stats" stats={stats} />
  )
}