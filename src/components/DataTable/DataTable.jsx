import React from 'react'
import { arrayOf, object } from 'prop-types'

import Table from './DataTable.styles'

function DataTable ({data, ...props}) {
  return (
    <Table data={data} {...props} />
  )
}

DataTable.propTypes = {
  data: arrayOf(object).isRequired
}

export default DataTable
