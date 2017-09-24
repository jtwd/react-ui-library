import React from 'react'

import StatPanel from '../StatPanel'

const stats = [
  {
    statDesc: 'Number of something within a parameter',
    statValue: '1,334'
  }
]

export default function StatPanelSingle() {
  return (
    <StatPanel stats={stats} />
  )
}