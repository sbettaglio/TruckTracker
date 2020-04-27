import React from 'react'
import { useFormContext, ErrorMessage } from 'react-hook-form'
import { Label, Button, FormGroup, Col, Row } from 'reactstrap'
const UpdateCarrierInfo = () => {
  const { register, errors } = useFormContext()
  return (
    <>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label>
              <h5>Primary Contact</h5>
            </Label>
            <input
              className="form-control"
              type="text"
              name="primaryContact"
              ref={register}
              placeholder="Update Contact"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>
              <h5>Phone Number</h5>
            </Label>
            <input
              className="form-control"
              type="tel"
              name="phoneNumber"
              ref={register}
              placeholder="Update Phone Number"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label>
              <h5>Email</h5>
            </Label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Update Email"
              ref={register({
                pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
              })}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              message="Please enter a valid email"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Button type="submit" className="btn-success">
              Save Update
            </Button>
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}

export default UpdateCarrierInfo
