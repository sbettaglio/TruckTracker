import React from 'react'
import { Table } from 'reactstrap'
import LoadTableComponent from './LoadTableComponent'
import LoadTableHeader from './LoadTableHeader'
import EmptyTable from './EmptyTable'
const LoadTable = ({ slot1, slot2, slot3, slot4, slot5, results }) => {
  console.log(results)
  return (
    <>
      <Table responsive>
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
          {results.length > 0 ? (
            results.map(result => {
              return (
                <LoadTableComponent
                  key={result.id}
                  loadId={result.id}
                  pCity={result.pickCity}
                  pApp={result.pickApp}
                  dCity={result.dropCity}
                  dApp={result.dropApp}
                  load={result}
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
