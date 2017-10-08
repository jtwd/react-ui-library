import React from 'react'
import styled from 'styled-components'
import { string, arrayOf, shape, number } from 'prop-types'

import Panel from '../Panel'
import { fsMega, fsLg, fsSm } from '../_theme/fontSizes'
import { md } from '../_theme/spacers'
import { primary } from '../_theme/palette'

const SingleStat = styled.div`
  font-weight: bold;
  font-size: ${fsMega};
  text-align: center;
  padding: ${md};
  color: ${primary()};
`
const StatRow = styled.div`
  margin: 0 -1rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${props => props.alt && `
    background: rgba(0,0,0,.15);
  `}
`

const StatDesc = styled.span`
  padding: .5rem .75rem .5rem 0;
  font-size: ${fsSm};
`

const StatValue = styled.strong`
  text-align: right;
  color: ${primary()};
  font-weight: bold;
  font-size: ${fsLg};
`

function StatItem({desc, value, index}) {
  // eslint-disable-next-line no-void
  const altColor = !(index === parseFloat(index)? !(index%2) : void 0)
  
  return (
    <StatRow alt={altColor}>
      <StatDesc>{desc}</StatDesc>
      <StatValue>{value}</StatValue>
    </StatRow>
  )
}

StatItem.propTypes = {
  desc: string.isRequired,
  value: string.isRequired,
  index: number.isRequired
}

function StatPanel({title, stats}) {
  const title2 = (!title && stats.length === 1) ? stats[0].statDesc : title
  const statContent = (stats.length === 1) 
    ? <SingleStat>{stats[0].statValue}</SingleStat> 
    : stats.map((stat, i) => <StatItem key={stat.statDesc.replace(' ', '').toLowerCase()} desc={stat.statDesc} value={stat.statValue} index={i} />)

  return (
    <Panel header={title2}>{statContent}</Panel>
  )
}

StatPanel.propTypes = {
  /** Panel title, if only 1 stat is supplied (and no title) the stat desc becomes the panel title */
  title: string,
  /** Array of stat objects containing a desc and value */
  stats: arrayOf(shape({
    statDesc: string,
    statValue: string
  })).isRequired
}

StatPanel.defaultProps = {
  title: null
}

export default StatPanel
