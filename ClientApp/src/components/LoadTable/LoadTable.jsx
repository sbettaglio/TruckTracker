import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import LoadTableComponent from './LoadTableComponent'
import LoadTableHeader from './LoadTableHeader'
import EmptyTable from './EmptyTable'
const LoadTable = ({ slot1, slot2, slot3, slot4, slot5, results }) => {
  console.log(results)
  return (
    <>
      <Table>
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
          {results !== undefined ? (
            results.map(result => {
              return (
                <LoadTableComponent
                  key={result.id}
                  id={result.id}
                  pCity={result.pickCity}
                  pApp={result.pickApp}
                  dCity={result.dropCity}
                  dApp={result.dropApp}
                />
              )
            })
          ) : (
            <EmptyTable />
          )}
        </tbody>
      </Table>
    </>
  )
}

export default LoadTable
