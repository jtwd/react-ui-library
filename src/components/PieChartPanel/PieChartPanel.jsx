import React from 'react'
import { string, arrayOf, array, bool} from 'prop-types'
import {Chart} from 'react-google-charts'
import shortid from 'shortid'

import Panel from '../Panel'
import { darkBlue, darkYellow, darkGreen, darkRed } from '../_theme/colors'

function PieChartPanel({data, title, is3D}) {
  const chartProps = {
    chartType: 'PieChart',
    data,
    graph_id: `PC${shortid.generate()}`,
    width: '100%',
    options: {
      backgroundColor: 'transparent',
      colors: [darkBlue, darkYellow, darkGreen, darkRed],
      fontSize: 16,
      fontName: 'Raleway',
      height: 300,
      legend: {
        textStyle: { color: 'white', fontSize: 16}
      },
      is3D
    }
  }
  return (
    <Panel header={title}>
      <Chart {...chartProps} />
    </Panel>
  )
}

PieChartPanel.propTypes = {
  title: string.isRequired,
  data: arrayOf(array).isRequired,
  is3D: bool
}

PieChartPanel.defaultProps = {
  is3D: false
}

export default PieChartPanel