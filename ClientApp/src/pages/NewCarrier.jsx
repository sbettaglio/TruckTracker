import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import axios from 'axios'
import './styles/add-new-carrier.scss'
const NewCarrier = () => {
  const [carrier, setCarrier] = useState({})
  const trackInput = e => {
    const fieldToUpdate = e.target.name
    console.log(fieldToUpdate)
    const value = e.target.value
    if (value === 'on') {
      setCarrier(prevCarrier => {
        prevCarrier[fieldToUpdate] = true
        console.log(prevCarrier)
        return prevCarrier
      })
    } else if (fieldToUpdate === 'mCNumber') {
      setCarrier(prevCarrier => {
        prevCarrier[fieldToUpdate] = parseInt(value, 10)
        console.log(value)
        return prevCarrier
      })
    } else {
      setCarrier(prevCarrier => {
        prevCarrier[fieldToUpdate] = value
        console.log(prevCarrier)
        return prevCarrier
      })
    }
  }
  const sendCarrierToApi = async () => {
    console.log('adding', carrier)
    const resp = await axios.post('api/Carriers', carrier)
    console.log(resp)
  }

  return (
    <>
      <div className="title-div">
        <h1>Add New Carrier</h1>
      </div>
      <main>
        <Container>
          <Form>
            <Row>
              <Col sm={1} md={6}>
                <FormGroup>
                  <Label for="carrierName">
                    Carrier Name{carrier.carrierName}
                  </Label>
                  <Input
                    type="text"
                    name="carrierName"
                    id="carrierName"
                    placeholder="Carrier name goes here"
                    onChange={trackInput}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="exampleMC">MC Number</Label>
                  <Input
                    type="number"
                    name="mCNumber"
                    id="exampleMC"
                    placeholder="123456"
                    onChange={trackInput}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={1} md={6}>
                <FormGroup>
                  <Label for="examplePrimaryContact">Primary Contact</Label>
                  <Input
                    type="text"
                    name="primaryContact"
                    id="examplePrimaryContact"
                    placeholder="John Doe"
                    onChange={trackInput}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePhone">Phone</Label>
                  <Input
                    type="tel"
                    name="phoneNumber"
                    id="examplePhone"
                    placeholder="555-867-5309"
                    onChange={trackInput}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={1} md={8}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    onChange={trackInput}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="exampleState">Home State</Label>
                  <Input
                    type="select"
                    name="homeState"
                    id="exampleState "
                    onChange={trackInput}
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
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={1} md={6}>
                <FormGroup check>
                  <Input
                    type="checkbox"
                    name="validInsurance"
                    id="exampleInsurance"
                    onChange={trackInput}
                  />
                  <Label for="exampleInsurance" check>
                    Valid Insurance
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Button className="btn-success" onClick={sendCarrierToApi}>
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

export default NewCarrier
