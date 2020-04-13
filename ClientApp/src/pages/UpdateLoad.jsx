import React, { useState } from 'react'
import axios from 'axios'
import LoadTrackingForm from '../components/LoadTracking/LoadTrackingForm'
import './styles/update-load.scss'
const UpdateLoad = props => {
  console.log(props)

  const loadId = props.match.params.loadId

  return (
    <>
      <div className="title-div">
        <h1>Load # {loadId}</h1>
      </div>
      <main>
        <LoadTrackingForm id={loadId} />
      </main>
    </>
  )
}

export default UpdateLoad
