import React from 'react'
import styled from 'styled-components'
import { string, arrayOf, array, bool} from 'prop-types'
import {Chart} from 'react-google-charts'
import shortid from 'shortid'

import Panel from '../Panel'
import { darkBlue, darkYellow, darkGreen, darkRed } from '../_theme/colors'

const StyledPanel = styled(Panel)`
  .Panel-body {
    padding: 0;
    min-height: 300px;
  }
`

function PieChartPanel({data, title, is3D, height, ...props}) {
  const chartProps = {
    chartType: 'PieChart',
    data,
    graph_id: `PC${shortid.generate()}`,
    width: '100%',
    height,
    options: {
      backgroundColor: 'transparent',
      colors: [darkBlue, darkYellow, darkGreen, darkRed],
      fontSize: 16,
      fontName: 'Raleway',
      legend: {
        textStyle: { color: 'white', fontSize: 16}
      },
      is3D,
      height,
      ...props
    }
  }
  return (
    <StyledPanel header={title}>
      <Chart {...chartProps} />
    </StyledPanel>
  )
}

PieChartPanel.propTypes = {
  title: string.isRequired,
  data: arrayOf(array).isRequired,
  is3D: bool,
  height: string
}

PieChartPanel.defaultProps = {
  is3D: false,
  height: 300
}

export default PieChartPanel