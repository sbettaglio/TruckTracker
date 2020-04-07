import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import LoadTableComponent from './LoadTableComponent'
import LoadTableHeader from './LoadTableHeader'
const LoadTable = ({ slot1, slot2, slot3, slot4, slot5 }) => {
  return (
    <>
      <Table bordered>
        <thead>
          <LoadTableHeader
            slot1={slot1}
            slot2={slot2}
            slot3={slot3}
            slot4={slot4}
            slot5={slot5}
          />
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
