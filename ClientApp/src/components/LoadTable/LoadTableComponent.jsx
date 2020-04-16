import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
const LoadTableComponent = ({ id, pCity, pApp, dCity, dApp }) => {
  return (
    <>
      <tr>
        <th scope="row">
          <Link to="/loadtracker/{id}">{id}</Link>
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
