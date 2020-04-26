import React from 'react'
import { Col, FormGroup, Label, Button, Row } from 'reactstrap'
import { useFormContext, ErrorMessage } from 'react-hook-form'
const LoadTrackingForm = ({ load, remove }) => {
  const { register, errors } = useFormContext()

  return (
    <>
      <Row>
        <FormGroup>
          <Label for="loadStatus">
            <h4>Load Status</h4>
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
        <FormGroup>
          <Label for="exampleDateTime">
            <h4>ETA to Pick</h4>
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
        <FormGroup>
          <Label>
            <h4>Checked-in</h4>
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
        <FormGroup>
          <Label>
            <h4>Checked-out</h4>
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
        <FormGroup>
          <Label>
            <h4>ETA to Drop</h4>
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
        <FormGroup>
          <Label>
            <h4>Checked-in</h4>
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
        <FormGroup>
          <Label>
            <h4>Checked-out</h4>
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

        <Col md={4}>
          <FormGroup className="registration-button">
            <Button className="btn-success" type="submit">
              Save
            </Button>
          </FormGroup>
        </Col>
        <Col md={{ size: 6, offset: 2 }}>
          <FormGroup>
            <Button className="btn-danger" onClick={remove}>
              Remove
            </Button>
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}

export default LoadTrackingForm
