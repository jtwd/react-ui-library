import React from 'react'
import styled from 'styled-components'
import { string, arrayOf, shape, number } from 'prop-types'

import Panel from '../Panel'
import fontSizes from '../_theme/fontSizes'
import spacers from '../_theme/spacers'
import { primary, trans } from '../_theme/palette'

const SingleStat = styled.div`
  font-weight: bold;
  font-size: ${fontSizes.mega};
  text-align: center;
  padding: ${spacers.md};
  color: ${primary()};
`
const StatRow = styled.div`
  margin: 0 -${spacers.md};
  padding: 0 ${spacers.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${props => props.alt && `
    background: ${trans(1)};
  `}
`

const StatDesc = styled.span`
  padding: ${spacers.xs} ${spacers.sm} ${spacers.xs} 0;
  font-size: ${fontSizes.sm};
`

const StatValue = styled.strong`
  text-align: right;
  color: ${primary()};
  font-weight: bold;
  font-size: ${fontSizes.lg};
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
