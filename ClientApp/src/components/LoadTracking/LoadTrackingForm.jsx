import React from 'react'
import { Row, Col, FormGroup, Label, Button } from 'reactstrap'
import { useFormContext, ErrorMessage } from 'react-hook-form'
const LoadTrackingForm = ({ load, save }) => {
  const { register, errors } = useFormContext()

  return (
    <>
      {/* <Row> */}
      <Col>
        <FormGroup>
          <Label for="loadStatus">
            <h6>Load Status</h6>
          </Label>
          <select
            className="form-control"
            type="select"
            name="loadStatus"
            id="loadStatus"
            ref={register({ required: true })}
          >
            <option value="" disabled selected>
              Update Status
            </option>
            <option value="Pick on way">Pick on way</option>
            <option value="Pick late">Pick late</option>
            <option value="At shipper">At shipper</option>
            <option value="Loading">Loading</option>
            <option value="On route">On Route</option>
            <option value="Rolling Late">Rolling Late</option>
            <option value="At Drop">At drop</option>
            <option value="Unloading">Unloading</option>
            <option value="Empty">Empty</option>
          </select>
          <ErrorMessage
            errors={errors}
            name="loadStatus"
            message="Please update load status"
          />
        </FormGroup>
      </Col>
      {/* </Row> */}
      {/* <Row> */}
      <Col>
        <FormGroup>
          <Label for="exampleDateTime">
            <h6>ETA to Pick</h6>
          </Label>
          <input
            className="form-control"
            name="pickEta"
            type="datetime-local"
            step="900"
            ref={register}
            defaultValue={load.pickEta}
          ></input>
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label>
            <h6>Checked-in</h6>
          </Label>
          <input
            className="form-control"
            name="pickCheckIn"
            type="datetime-local"
            step="900"
            ref={register}
            defaultValue={load.pickCheckIn}
          ></input>
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label>
            <h6>Checked-out</h6>
          </Label>
          <input
            className="form-control"
            name="pickCheckOut"
            type="datetime-local"
            step="900"
            defaultValue={load.pickCheckOut}
            ref={register}
          ></input>
        </FormGroup>
      </Col>
      {/* </Row> */}

      {/* <Row> */}
      <Col>
        <FormGroup>
          <Label>
            <h6>ETA to Drop</h6>
          </Label>
          <input
            className="form-control"
            name="dropEta"
            type="datetime-local"
            step="900"
            defaultValue={load.pickCheckOut}
            ref={register}
          ></input>
        </FormGroup>
      </Col>

      <Col>
        <FormGroup>
          <Label>
            <h6>Checked-in</h6>
          </Label>
          <input
            className="form-control"
            name="dropCheckIn"
            type="datetime-local"
            step="900"
            defaultValue={load.dropCheckIn}
            ref={register}
          ></input>
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label>
            <h6>Checked-out</h6>
          </Label>
          <input
            className="form-control"
            name="dropCheckOut"
            type="datetime-local"
            step="900"
            defaultValue={load.dropCheckOut}
            ref={register}
          ></input>
        </FormGroup>
      </Col>
      {/* // </Row> */}
      {/* <Row> */}
      <Col>
        <FormGroup className="registration-button">
          <Button className="btn-success" type="submit" onSubmit={save}>
            Save
          </Button>
        </FormGroup>
      </Col>
      {/* </Row> */}
    </>
  )
}

export default LoadTrackingForm
