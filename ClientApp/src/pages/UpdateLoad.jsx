import React from 'react'
import LoadTrackingForm from '../components/LoadTracking/LoadTrackingForm'
import './styles/update-load.scss'
const UpdateLoad = props => {
  console.log(props)
  return (
    <>
      <div className="title-div">
        <h1>Load Id</h1>
      </div>
      <main>
        <LoadTrackingForm />
      </main>
    </>
  )
}

export default UpdateLoad
