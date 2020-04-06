import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import LoadTableComponent from './LoadTableComponent'
const LoadTable = () => {
  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>P/U City</th>
            <th>P/U Date</th>
            <th>D/O City</th>
            <th>D/O DAte</th>
          </tr>
        </thead>
        <tbody>
          <LoadTableComponent
            id="1"
            pCity="Miami, FL"
            pApp="04/05/2020 17:00"
            dCity="Tampa, FL"
            dApp="04/06/2020 0:700"
          />
          <LoadTableComponent
            id="2"
            pCity="Miami, FL"
            pApp="04/05/2020 17:00"
            dCity="Tampa, FL"
            dApp="04/06/2020 0:700"
          />
          <LoadTableComponent
            id="3"
            pCity="Miami, FL"
            pApp="04/05/2020 17:00"
            dCity="Tampa, FL"
            dApp="04/06/2020 0:700"
          />
          <LoadTableComponent
            id="4"
            pCity="Miami, FL"
            pApp="04/05/2020 17:00"
            dCity="Tampa, FL"
            dApp="04/06/2020 0:700"
          />
          <LoadTableComponent
            id="5"
            pCity="Miami, FL"
            pApp="04/05/2020 17:00"
            dCity="Tampa, FL"
            dApp="04/06/2020 0:700"
          />
        </tbody>
      </Table>
    </>
  )
}

export default LoadTable
