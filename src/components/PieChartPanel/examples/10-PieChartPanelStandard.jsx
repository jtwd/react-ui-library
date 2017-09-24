import React from 'react'

import PieChartPanel from '../PieChartPanel'

export default function PieChartPanelStandard() {
  const data = [
    ['Developer', 'Hours Worked'],
    ['Dan', 54],
    ['Stuey', 48],
    ['JT', 32]
  ]
  return (
    <PieChartPanel title="Hours worked on project by Front end team" data={data} />
  )
}