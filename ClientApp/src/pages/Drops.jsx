import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import LoadTable from '../components/LoadTable'

const Drops = () => {
  return (
    <>
      <div>
        <h1>Today's Drops</h1>
      </div>
      <main className="loads-main">
        <LoadTable />
      </main>
    </>
  )
}

export default Drops
