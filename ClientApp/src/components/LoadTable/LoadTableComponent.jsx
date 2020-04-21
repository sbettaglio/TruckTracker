import React from 'react'
import { Link } from 'react-router-dom'
const LoadTableComponent = ({ loadId, pCity, pApp, dCity, dApp, load }) => {
  return (
    <>
      <tr>
        <th scope="row">
          <Link to={{ pathname: `/loadtracker/${loadId}`, state: load }}>
            {loadId}
          </Link>
        </th>
        <td>{pCity}</td>
        <td>{pApp}</td>
        <td>{dCity}</td>
        <td>{dApp}</td>
      </tr>
    </>
  )
}

export default LoadTableComponent
