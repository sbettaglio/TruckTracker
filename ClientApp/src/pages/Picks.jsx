import React from 'react'

import LoadTable from '../components/LoadTable'
const Picks = () => {
  return (
    <>
      <div>
        <h1>Today's Picks</h1>
      </div>
      <main className="loads-main">
        <LoadTable />
      </main>
    </>
  )
}

export default Picks
