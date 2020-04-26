import React from 'react'
import { FormGroup, Label, Button, Row, Col } from 'reactstrap'
import { useFormContext, ErrorMessage } from 'react-hook-form'
const AssignCarrierToLoad = ({ save }) => {
  const { register, errors } = useFormContext()
  return (
    <>
      <Row>
        <Col sm={12} lg={8}>
          <FormGroup>
            <Label>Carrier MC</Label>
            <input
              type="number"
              className="form-control"
              name="mCNumber"
              ref={register({ required: true })}
              // onChange={track}
            ></input>
            <ErrorMessage
              errors={errors}
              name="mCNumber"
              message="MC number is required to assign a carrier"
            />
          </FormGroup>
        </Col>
        <Col sm={12} lg={4}>
          <FormGroup className="button-bottom">
            <Button className="btn-success" type="submit" onSubmit={save}>
              Assign
            </Button>
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}

export default AssignCarrierToLoad
