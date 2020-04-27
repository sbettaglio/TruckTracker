import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useForm, FormContext } from 'react-hook-form'
import { Container, Col, Row, Button, Form, FormGroup } from 'reactstrap'
import axios from 'axios'
import './styles/add-new-carrier.scss'
import CustomNav from '../components/NavMenu/CustomNav'
import AlertComponent from '../components/AlertComponent'
import NewCarrierInput from '../components/NewCarrier/NewCarrierInput'
import NewCarrierEmailInput from '../components/NewCarrier/NewCarrierEmailInput.jsx'
import NewCarrierStateSelect from '../components/NewCarrier/NewCarrierStateSelect'
const NewCarrier = () => {
  const methods = useForm()
  const [wasSuccessfullyCreated, setWasSuccessfullyCreated] = useState({
    shouldRedirect: false,
    newCarrierInformation: {},
  })
  const [visible, setVisible] = useState(false)

  const onDismiss = () => setVisible(false)

  const sendCarrierToApi = async data => {
    data.mCNumber = parseInt(data.mCNumber)
    try {
      const resp = await axios.post('api/Carriers', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      if (resp.status === 201) {
        setWasSuccessfullyCreated({
          shouldRedirect: true,
          newCarrierInformation: resp.data,
        })
      }
    } catch (error) {
      setVisible(true)
    }
  }
  if (wasSuccessfullyCreated.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/carriers/${wasSuccessfullyCreated.newCarrierInformation.id}`,
          state: { carrier: wasSuccessfullyCreated.newCarrierInformation },
        }}
      />
    )
  } else {
    return (
      <>
        <CustomNav />
        <div className="title-div-new-carrier">
          <h1>New Carrier</h1>
        </div>
        <main className="main-new-carrier">
          <Container className="new-carrier-container">
            <FormContext {...methods}>
              <Form
                onSubmit={methods.handleSubmit(sendCarrierToApi)}
                className="new-carrier-form"
              >
                <Row>
                  <Col sm={1} md={6}>
                    <FormGroup>
                      <NewCarrierInput
                        label="Carrier Name"
                        name="carrierName"
                        type="text"
                        placeholder="Input Carrier Name"
                        message="This field is required to add a carrier"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    {visible ? (
                      <AlertComponent
                        isOpen={visible}
                        toggle={onDismiss}
                        fade={true}
                        msg="That MC number is already in the system. Please try again"
                      />
                    ) : (
                      <FormGroup>
                        <NewCarrierInput
                          label="MC Number"
                          name="mCNumber"
                          type="number"
                          placeholder="123456"
                          message="This field is required to add a carrier"
                        />
                      </FormGroup>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col sm={1} md={6}>
                    <FormGroup>
                      <NewCarrierInput
                        label="Primary Contact"
                        name="primaryContact"
                        type="text"
                        placeholder="Input Contact Name"
                        message="This field is required to add a carrier"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <NewCarrierInput
                        label="Phone Number"
                        name="phoneNumber"
                        type="number"
                        placeholder="Input Phone Number"
                        message="This field is required to add a carrier"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={1} md={7}>
                    <FormGroup>
                      <NewCarrierEmailInput
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Input Email"
                        message="Please Input Valid Email Address"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <NewCarrierStateSelect
                        label="Home State"
                        name="homeState"
                        message="This field is required to add a carrier"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col sm={1} md={6}>
                    <FormGroup check>
                      <NewCarrierInput
                        label="Valid Insurance"
                        name="validInsurance"
                        type="checkbox"
                        message="This field is required to add a carrier"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup className="submit-carrier">
                      <Button type="submit" className="btn-success">
                        Save Carrier
                      </Button>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </FormContext>
          </Container>
        </main>
      </>
    )
  }
}

export default NewCarrier
