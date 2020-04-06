import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
const HomeTable = () => {
  return (
    <>
      <Table className="user-home" responsive>
        <tbody>
          <tr>
            <td scope="row">
              <Link to="/picks">Today's Picks</Link>
            </td>
          </tr>
          <tr>
            <td scope="row">
              <Link to="/drops">Today's Drops</Link>
            </td>
          </tr>
          <tr>
            <td scope="row">
              <Link to="/late">Late Trucks</Link>
            </td>
          </tr>
          <tr>
            <td scope="row">
              <Link to="/available">Available Loads</Link>
            </td>
          </tr>
          <tr>
            <td scope="row">
              <Link to="/create">Create New Load</Link>
            </td>
          </tr>
          <tr>
            <td scope="row">
              <Link to="/carriers">Carrier Profiles</Link>
            </td>
          </tr>
          <tr>
            <td scope="row">
              <Link to="/newCarrier">New Carrier</Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default HomeTable
