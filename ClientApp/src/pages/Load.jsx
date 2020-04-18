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
  const trackLoad = e => {
    const fieldToUpdate = e.target.name
    console.log(fieldToUpdate)
    let value = e.target.value
    if (value === 'on') {
      value = true
    }
    console.log(value)
    setLoad(prevLoad => {
      return { ...prevLoad, [fieldToUpdate]: value }
    })
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
  const sendLoadUpdateToApi = async () => {
    // console.log('updating', load)
    const resp = await axios.put(`api/Loads/${load.id}/update`, load)
    if (resp.status === 200) {
      setLoad(resp.data)
      alert('Load has been updated')
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
            <LoadTrackingForm
              load={load}
              track={trackLoad}
              save={sendLoadUpdateToApi}
            />
          </section>
        )}
      </main>
    </>
  )
}

export default Load
