import React from 'react'
import { FormGroup, Label, Button, Row, Col } from 'reactstrap'
import { useFormContext, ErrorMessage } from 'react-hook-form'
const AssignCarrierToLoad = ({ save }) => {
  const { register, errors } = useFormContext({
    validateCriteriaMode: 'all',
  })
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
              ref={register({
                required: 'This is required',
                max: {
                  value: 999999,
                  message: 'MC number must be less than 6 digits',
                },
              })}
            ></input>
            <ErrorMessage errors={errors} name="mCNumber">
              {({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              }
            </ErrorMessage>
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
