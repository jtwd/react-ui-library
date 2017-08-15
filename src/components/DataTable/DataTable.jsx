import React from 'react'
import styled from 'styled-components'
import { arrayOf, object } from 'prop-types'
import Reactable from 'reactable'

import { yellow, darkYellow } from '../_theme/colors'
import { xxs, xs, md } from '../_theme/spacers'

const Table = styled(Reactable.Table)`
  border-collapse: separate;
  border-spacing: 2px;
  
  thead {
    th {
      text-align: left;
      padding: 0 ${xs};
    }
  }
  
  .reactable-header-sortable {
    color: ${yellow};
    position: relative;
    padding-right: ${md};
    
    &:hover, &:focus {
      color: ${darkYellow};
      cursor: pointer;
    }
  }
  
  .reactable-header-sort-asc,
  .reactable-header-sort-desc {
    &::after {
      position: absolute;
      right: ${xxs};
      top: 0;
      font-size: 0.9rem;
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
      padding: ${xxs} ${xs};
      background: rgba(0,0,0,.5);
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