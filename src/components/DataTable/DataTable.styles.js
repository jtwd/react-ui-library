import styled from 'styled-components'
import Reactable from 'reactable'

import { themeProps } from '../_theme/utils'
import theme from './DataTable.theme'

const t = themeProps(theme)

const Table = styled(Reactable.Table)`
  border-spacing: ${t.borderSpacing};
  border-collapse: separate;
  
  thead {
    th {
      text-align: ${t.thTextAlign};
      padding: ${t.thPadding};
    }
  }
  
  .reactable-header-sortable {
    color: ${t.sortableColor};
    padding: ${t.sortablePadding};
    position: relative;

    &:hover, &:focus {
      color: ${t.sortableHoverColor};
      cursor: pointer;
    }
  }
  
  .reactable-header-sort-asc,
  .reactable-header-sort-desc {
    &::after {
      right: ${t.sortSymbolRight};
      top: ${t.sortSymbolTop};
      font-size: ${t.sortSymbolFontSize};
      position: absolute;
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
      padding: ${t.cellPadding};
      background: ${t.cellBackgroundColor};
    }
  }
`

export default Table
