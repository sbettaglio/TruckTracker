import React from 'react'

import LoadTable from '../components/LoadTable/LoadTable'
const Picks = () => {
  return (
    <>
      <div className="title-div">
        <h1>Available Loads</h1>
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

export default Picks
