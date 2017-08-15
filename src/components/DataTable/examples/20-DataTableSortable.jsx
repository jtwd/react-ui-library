import React from 'react'

import DataTable from '../DataTable'

const data = [
  {
    "First name": "Wallache",
    "Last name": "Kerner",
    "Email": "wkerner0@wikipedia.org",
    "Gender": "Male"
  },
  {
    "First name": "Annabela",
    "Last name": "Godsal",
    "Email": "agodsal1@printfriendly.com",
    "Gender": "Female"
  },
  {
    "First name": "Elisha",
    "Last name": "Dreye",
    "Email": "edreye2@clickbank.net",
    "Gender": "Female"
  },
  {
    "First name": "Katerina",
    "Last name": "Marquese",
    "Email": "kmarquese3@globo.com",
    "Gender": "Female"
  },
  {
    "First name": "Leoine",
    "Last name": "Cail",
    "Email": "lcail4@wikipedia.org",
    "Gender": "Female"
  },
  {
    "First name": "Aida",
    "Last name": "Woolager",
    "Email": "awoolager5@bbb.org",
    "Gender": "Female"
  }
]

/** Data Table standard */
export default function DataTableStandard() {
  return (
    <div>
      <div className="docs-ex-title">All columns sortable</div>
      <DataTable data={data} sortable width="100%" />
      <div className="docs-ex-title">Selected columns sortable</div>
      <DataTable data={data} sortable={['First name', 'Last name']} width="100%" />
    </div>
  )
}