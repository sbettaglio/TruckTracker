import React from 'react'
import { Link } from 'react-router-dom'
import LoadTable from '../components/LoadTable/LoadTable'

const LateTrucks = () => {
  return (
    <>
      <div>
        <h1>Late Trucks</h1>
      </div>
      <main className="loads-main">
        <LoadTable
          slot1="Id"
          slot2="App"
          slot3="City"
          slot4="ETA"
          slot5="Pick/Drop"
        />
      </main>
    </>
  )
}

export default LateTrucks
