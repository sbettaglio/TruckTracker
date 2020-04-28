import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import { useForm, FormContext } from 'react-hook-form'
import axios from 'axios'
import { Form } from 'reactstrap'
import './styles/carrier-profiles.scss'
import CustomNav from '../components/NavMenu/CustomNav'
import CarrierProfileComponent from '../components/CarrierProfiles/CarrierProfileComponent'
import UpdateCarrierInfo from '../components/CarrierProfiles/UpdateCarrierInfo'
import Footer from '../components/Footer/Footer'
const CarrierProfiles = props => {
  const carrierId = props.match.params.carrierId
  const methods = useForm()
  const [visible, setVisible] = useState(false)
  const [carrier, setCarrier] = useState({})
  const getCarrierData = async () => {
    const resp = await axios.get(`api/Carriers/${carrierId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    setCarrier(resp.data)
  }
  const activateCarrierUpdate = () => {
    setVisible(true)
  }
  const sendCarrierUpdateToApi = async data => {
    data.id = parseInt(carrierId)
    console.log(data)
    const resp = await axios.put(`api/Carriers/${data.id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    if (resp.status === 200) {
      setCarrier(resp.data)
      setVisible(false)
    }
  }
  useEffect(() => {
    getCarrierData()
  }, [])

  return (
    <>
      <CustomNav />
      <div className="carrier-profile-title-div">
        <h1>{carrier.carrierName}</h1>
      </div>
      <main className="carrier-profile">
        <Container className="carrier-profile-container">
          {visible ? (
            <FormContext {...methods}>
              <Form onSubmit={methods.handleSubmit(sendCarrierUpdateToApi)}>
                <UpdateCarrierInfo className="carrier-update-profile" />
              </Form>
            </FormContext>
          ) : (
            <CarrierProfileComponent
              carrier={carrier}
              button={activateCarrierUpdate}
            />
          )}
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default CarrierProfiles
