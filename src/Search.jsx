import React from 'react'

import Aligner from './components/Aligner'
import StatsPanel from './components/StatPanel'
import PieChartPanel from './components/PieChartPanel'

const statsData1 = [
  {
    statDesc: 'Number of something within a parameter',
    statValue: '1,334'
  }
]

const statsData2 = [
  {
    statDesc: 'Number of things today',
    statValue: '14'
  },
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

const pieData = [
  ['Developer', 'Hours Worked'],
  ['Dan', 54],
  ['Stuey', 48],
  ['JT', 32]
]

const Search = () =>
  <div>
    <h1>Search</h1>

    <Aligner breakpoint="lg" gutter="md" stretch ratio={[4,6,7]}>
      <StatsPanel stats={statsData1} />
      <StatsPanel title="Set of statistics" stats={statsData2} />
      <PieChartPanel is3D data={pieData} height="300px" title="Hours worked on project by Front end team" />
    </Aligner>
  </div>

export default Search
