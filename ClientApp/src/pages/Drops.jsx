import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import LoadTable from '../components/LoadTable/LoadTable'

const Drops = () => {
  return (
    <>
      <div>
        <h1>Today's Drops</h1>
      </div>
      <main className="loads-main">
        <LoadTable
          slot1="Id"
          slot2="P/U City"
          slot3="P/U Date"
          slot4="D/O City"
          slot5="D/O DAte"
        />
      </main>
    </>
  )
}

export default Drops
