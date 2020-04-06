import React from 'react'

const LoadTableHeader = ({ slot1, slot2, slot3, slot4, slot5 }) => {
  return (
    <>
      <tr>
        <th>{slot1}</th>
        <th>{slot2}</th>
        <th>{slot3}</th>
        <th>{slot4}</th>
        <th>{slot5}</th>
      </tr>
    </>
  )
}

export default LoadTableHeader
