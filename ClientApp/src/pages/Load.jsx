import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './styles/load.scss'
import AssignCarrierToLoad from '../components/LoadTracking/AssignCarrierToLoad'
import LoadTrackingForm from '../components/LoadTracking/LoadTrackingForm'
import { Container, Form, Row, Col } from 'reactstrap'
import AlertComponent from '../components/AlertComponent'
import { useForm, FormContext } from 'react-hook-form'
import CustomNav from '../components/NavMenu/CustomNav'
import LoadInfoDisplay from '../components/LoadTracking/LoadInfoDisplay'
import './styles/load.scss'
import LoadFooter from '../components/Footer/LoadFooter'

const Load = props => {
  let loadInfo = props.location.state.load
  const loadId = props.match.params.loadId
  const [load, setLoad] = useState({ loadInfo })
  const [visible, setVisible] = useState(false)
  const [badRequest, setBadRequest] = useState('')
  const methods = useForm()

  // const [distance, setDistance] = useState('')
  // const API_KEY = `${process.env.REACT_APP_MAP_KEY}`

  const onDismiss = () => setVisible(false)
  const getLoadData = async () => {
    const resp = await axios.get(`api/Loads/${loadId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    setLoad(resp.data)
    // const dist = await axios.get(
    //   `https://www.mapquestapi.com/directions/v2/route?key=${API_KEY}&from=${resp.data.pickCity}&to=${resp.data.dropCity}`
    // )
    // setDistance(`${Math.ceil(dist.data.route.distance)} miles`)
  }

  const saveCarrierToApi = async data => {
    try {
      data.mCNumber = parseInt(data.mCNumber)
      const resp = await axios.put(
        `api/Loads/${load.id}/${data.mCNumber}`,
        { data },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      if (resp.status === 200) {
        setLoad(resp.data)
      }
    } catch (error) {
      setBadRequest(error.response.data)
      setVisible(true)
    }
  }
  const sendLoadUpdateToApi = async data => {
    const resp = await axios.put(`api/Loads/${load.id}/update`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    if (resp.status === 200) {
      setLoad(resp.data)
      setVisible(true)
    }
  }
  const removeCarrierFromLoad = async () => {
    const resp = await axios.patch(
      `api/Loads/${load.id}/remove`,
      { load },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    )
    setLoad(resp.data)
  }
  useEffect(() => {
    getLoadData()
  }, [])
  return (
    <>
      <CustomNav />
      <div className="load-title-div">
        <h1>Load #{loadId}</h1>
      </div>
      <main className="load-info">
        <Row>
          <Col sm={12} md={6} xl={6}>
            <LoadInfoDisplay load={load} />
          </Col>
          <Col>
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
                      <AssignCarrierToLoad />
                    </Form>
                  </FormContext>
                </Container>
              </section>
            ) : (
              <Container>
                <FormContext {...methods}>
                  <Form onSubmit={methods.handleSubmit(sendLoadUpdateToApi)}>
                    <LoadTrackingForm
                      load={load}
                      remove={removeCarrierFromLoad}
                    />
                    {visible ? (
                      <AlertComponent
                        isOpen={visible}
                        toggle={onDismiss}
                        fade={true}
                        msg="Load has been updated."
                      />
                    ) : (
                      <></>
                    )}
                  </Form>
                </FormContext>
              </Container>
            )}
          </Col>
        </Row>
      </main>
      <LoadFooter />
    </>
  )
}

export default Load
