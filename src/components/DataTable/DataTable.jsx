import React from 'react'
import styled from 'styled-components'
import { arrayOf, object } from 'prop-types'
import Reactable from 'reactable'

import { primary, trans } from '../_theme/palette'
import spacers from '../_theme/spacers'
import { getTheme } from '../_theme/utils'

const fontSizes = getTheme('fontSizes')

const Table = styled(Reactable.Table)`
  border-collapse: separate;
  border-spacing: 2px;
  
  thead {
    th {
      text-align: left;
      padding: 0 ${spacers.xs};
    }
  }
  
  .reactable-header-sortable {
    color: ${primary()};
    position: relative;
    padding-right: ${spacers.md};
    
    &:hover, &:focus {
      color: ${primary('dark')};
      cursor: pointer;
    }
  }
  
  .reactable-header-sort-asc,
  .reactable-header-sort-desc {
    &::after {
      position: absolute;
      right: ${spacers.xxs};
      top: 0;
      font-size: ${fontSizes.sm};
    }
  }
  
  .reactable-header-sort-asc::after {
    content: '↑';
  }
  
  .reactable-header-sort-desc::after {
    content: '↓';
  }
  
  tbody {
    td, th {
      padding: ${spacers.xxs} ${spacers.xs};
      background: ${trans()};
    }
  }
`

function DataTable ({data, ...props}) {
  return (
    <Table data={data} {...props} />
  )
}

DataTable.propTypes = {
  data: arrayOf(object).isRequired
}

export default DataTable