import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './styles/load.scss'
import AssignCarrierToLoad from '../components/LoadTracking/AssignCarrierToLoad'
import LoadTrackingForm from '../components/LoadTracking/LoadTrackingForm'
import { Container, Form } from 'reactstrap'
import AlertComponent from '../components/AlertComponent'
import { useForm, FormContext } from 'react-hook-form'
import CustomNav from '../components/NavMenu/CustomNav'
import LoadInfoDisplay from '../components/LoadTracking/LoadInfoDisplay'
import './styles/load.scss'

const Load = props => {
  let loadInfo = props.location.state.load
  const loadId = props.match.params.loadId
  const [load, setLoad] = useState({ loadInfo })
  const [visible, setVisible] = useState(false)
  const [badRequest, setBadRequest] = useState('')
  const methods = useForm()
  const onDismiss = () => setVisible(false)
  const getLoadData = async () => {
    const resp = await axios.get(`api/Loads/${loadId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })

    setLoad(resp.data)
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
  const saveCarrierToApi = async data => {
    try {
      data.mCNumber = parseInt(data.mCNumber)
      const resp = await axios.put(
        `api/Loads/${load.id}/${data.mCNumber}`,

        { load },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      if (resp.status === 200) {
        setLoad(prevLoad => {
          console.log(prevLoad)
          return { ...prevLoad, carrierId: resp.data }
        })
      }
    } catch (error) {
      setBadRequest(error.response.data)
      setVisible(true)
    }
  }
  const sendLoadUpdateToApi = async () => {
    console.log('updating', load)
    const resp = await axios.put(`api/Loads/${load.id}/update`, load, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    if (resp.status === 200) {
      setLoad(resp.data)
      alert('Load has been updated')
    }
  }
  useEffect(() => {
    getLoadData()
  }, [])
  return (
    <>
      <CustomNav />
      <div className="title-div">
        <h1>Load #{loadId}</h1>
      </div>
      <main className="load-info">
        <LoadInfoDisplay load={load} />
        {load.carrierId == null ? (
          <section>
            {visible ? (
              <div>
                <AlertComponent
                  isOpen={visible}
                  toggle={onDismiss}
                  fade={true}
                  msg={badRequest}
                />
              </div>
            ) : (
              <h3>Assign Carrier</h3>
            )}
            <Container>
              <FormContext {...methods}>
                <Form onSubmit={methods.handleSubmit(saveCarrierToApi)}>
                  <AssignCarrierToLoad

                  // save={saveCarrierToApi}
                  />
                </Form>
              </FormContext>
            </Container>
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
