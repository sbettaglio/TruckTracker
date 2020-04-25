import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Alert,
} from 'reactstrap'
import axios from 'axios'
import './styles/add-new-carrier.scss'
import CustomNav from '../components/NavMenu/CustomNav'
import AlertComponent from '../components/AlertComponent'
const NewCarrier = () => {
  const { register, handleSubmit, errors } = useForm()
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
        <div className="title-div">
          <h1>Add New Carrier</h1>
        </div>
        <main>
          <Container>
            <Form onSubmit={handleSubmit(sendCarrierToApi)}>
              <Row>
                <Col sm={1} md={6}>
                  <FormGroup>
                    <Label for="carrierName">Carrier Name</Label>
                    <input
                      className="form-control"
                      type="text"
                      name="carrierName"
                      ref={register({ required: true })}
                      placeholder="Carrier name goes here"
                    />
                    {errors.carrierName && (
                      <h6 className="lead">
                        This field is required to create a load
                      </h6>
                    )}
                  </FormGroup>
                </Col>
                <Col>
                  {visible ? (
                    <AlertComponent
                      isOpen={visible}
                      toggle={onDismiss}
                      fade={true}
                      msg="hat MC number is already in the system. Please try again"
                    />
                  ) : (
                    // <Alert
                    //   color="danger"
                    //   isOpen={visible}
                    //   toggle={onDismiss}
                    //   fade={true}
                    // >
                    //   That MC number is already in the system. Please try again
                    // </Alert>
                    <FormGroup>
                      <Label for="exampleMC">MC Number</Label>
                      <input
                        className="form-control"
                        type="number"
                        name="mCNumber"
                        ref={register({ required: true })}
                        placeholder="123456"
                      />
                      {errors.mCNumber && (
                        <h6 className="lead">
                          This field is required to create a load
                        </h6>
                      )}
                    </FormGroup>
                  )}
                </Col>
              </Row>
              <Row>
                <Col sm={1} md={6}>
                  <FormGroup>
                    <Label for="examplePrimaryContact">Primary Contact</Label>
                    <input
                      className="form-control"
                      type="text"
                      name="primaryContact"
                      ref={register({ required: true })}
                      placeholder="John Doe"
                    />
                    {errors.primaryContact && (
                      <h6 className="lead">
                        This field is required to create a load
                      </h6>
                    )}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePhone">Phone</Label>
                    <input
                      className="form-control"
                      type="tel"
                      name="phoneNumber"
                      ref={register({ required: true })}
                      placeholder="555-867-5309"
                    />
                    {errors.phoneNumber && (
                      <h6 className="lead">
                        This field is required to create a load
                      </h6>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={1} md={8}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      ref={register({
                        required: true,
                        pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                      })}
                    />
                    {errors.email && (
                      <h6 className="lead">
                        This field is required to create a load
                      </h6>
                    )}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleState">Home State</Label>
                    <select
                      className="form-control"
                      name="homeState"
                      ref={register({ required: true })}
                    >
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District Of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                    {errors.homeState && (
                      <h6 className="lead">
                        This field is required to create a load
                      </h6>
                    )}
                    {errors.email && errors.email.type === 'pattern' && (
                      <h6 className="lead">Please submit a valid email</h6>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={1} md={6}>
                  <FormGroup check>
                    <input
                      className="form-control"
                      type="checkbox"
                      name="validInsurance"
                      ref={register({ required: true })}
                    />
                    <Label for="exampleInsurance" check>
                      Valid Insurance
                    </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Button type="submit" className="btn-success">
                      Save Carrier
                    </Button>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </Container>
        </main>
      </>
    )
  }
}

export default NewCarrier
