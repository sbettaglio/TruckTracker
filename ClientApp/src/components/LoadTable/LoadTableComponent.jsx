import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
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
        <td>
          <Moment format="MM-DD-YYYY HH:mm">{pApp}</Moment>
        </td>
        <td>{dCity}</td>
        <td>
          <Moment format="MM-DD-YYYY">{dApp}</Moment>
        </td>
      </tr>
    </>
  )
}

export default LoadTableComponent
