import React from 'react'
import { Link } from 'react-router-dom'

const LateTrucks = () => {
  return (
    <>
      <div>
        <h1>Late Trucks</h1>
      </div>
      <main>
        <ul>
          <li>
            <Link>
              <span>Load Id </span>
              <span>App </span>
              <span>City </span>
              <span>ETA </span>
              <span>P/D </span>
              <span>Carrier </span>
            </Link>
          </li>
          <li>
            <Link>
              <span>Load Id </span>
              <span>App </span>
              <span>City </span>
              <span>ETA </span>
              <span>P/D </span>
              <span>Carrier </span>
            </Link>
          </li>
          <li>
            <Link>
              <span>Load Id </span>
              <span>App </span>
              <span>City </span>
              <span>ETA </span>
              <span>P/D </span>
              <span>Carrier </span>
            </Link>
          </li>
        </ul>
      </main>
    </>
  )
}

export default LateTrucks
