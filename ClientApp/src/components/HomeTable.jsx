import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
const HomeTable = () => {
  return (
    <>
      <Table className="user-home" responsive>
        <tbody>
          <tr>
            <td>
              <Link to="/picks">Today's Picks</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/drops">Today's Drops</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/late">Late Trucks</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/available">Available Loads</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/create">Create New Load</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/carriers">Carrier Profiles</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/newCarrier">New Carrier</Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default HomeTable
