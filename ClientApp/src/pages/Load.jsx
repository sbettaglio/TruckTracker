import React, { useState, useEffect } from 'react'

import axios from 'axios'
import './styles/load.scss'
import AssignCarrierToLoad from '../components/LoadTracking/AssignCarrierToLoad'
import LoadTrackingForm from '../components/LoadTracking/LoadTrackingForm'

import CustomNav from '../components/NavMenu/CustomNav'
import LoadInfoDisplay from '../components/LoadTracking/LoadInfoDisplay'

const Load = props => {
  console.log(props)
  const loadId = props.match.params.loadId

  const [load, setLoad] = useState({})
  const [carrier, setCarrier] = useState({})
  const getLoadData = async () => {
    const resp = await axios.get(`api/Loads/${loadId}`)
    setLoad(resp.data)
  }
  const trackInput = e => {
    const fieldToUpdate = e.target.name
    const value = e.target.value
    if (fieldToUpdate === 'mCNumber') {
      setCarrier(prevCarrier => {
        prevCarrier[fieldToUpdate] = parseInt(value, 10)

        return prevCarrier
      })
    }
  }
  const saveCarrierToApi = async () => {
    const resp = await axios.put(`api/Loads/${load.id}/${carrier.mCNumber}`)
    if (resp.status === 200) {
      setLoad(prevLoad => {
        console.log(prevLoad)
        return { ...prevLoad, carrierId: resp.data }
      })
    }
  }
  console.log(load)
  useEffect(() => {
    getLoadData()
  }, [])
  return (
    <>
      <CustomNav />
      <div className="title-div">
        <h1>Load #{load.id}</h1>
      </div>
      <main>
        <LoadInfoDisplay load={load} />
        {load.carrierId === null ? (
          <section>
            <h3>Assign Carrier</h3>
            <AssignCarrierToLoad track={trackInput} save={saveCarrierToApi} />
          </section>
        ) : (
          <section>
            <h3>Update</h3>
            <LoadTrackingForm id={load.id} />
          </section>
        )}
      </main>
    </>
  )
}

export default Load
