import React from 'react'
import { Col, FormGroup, Label, Button, Row } from 'reactstrap'
import { useFormContext, ErrorMessage } from 'react-hook-form'
const LoadTrackingForm = ({ load, remove }) => {
  const { register, errors } = useFormContext()

  return (
    <>
      <Row>
        <Col sm={12} xl={6}>
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
              <option value="Pick On Way">Pick On Way</option>
              <option value="Pick Late">Pick Late</option>
              <option value="At Shipper">At Shipper</option>
              <option value="Loading">Loading</option>
              <option value="On Route">On Route</option>
              <option value="Rolling Late">Rolling Late</option>
              <option value="At Drop">At Drop</option>
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
        <Col md={12} xl={6}>
          <FormGroup>
            <Label for="exampleDateTime">
              <h4>Pick ETA</h4>
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
        <Col md={12} xl={6}>
          <FormGroup>
            <Label>
              <h4>Pick Check-In</h4>
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
        <Col md={12} xl={6}>
          <FormGroup>
            <Label>
              <h4>Pick Check-Out</h4>
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
        <Col md={12} xl={6}>
          <FormGroup>
            <Label>
              <h4>Drop ETA</h4>
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
        <Col md={12} xl={6}>
          <FormGroup>
            <Label>
              <h4>Drop Check-In</h4>
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
        <Col md={12} xl={6}>
          <FormGroup>
            <Label>
              <h4>Drop Check-Out</h4>
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

        <Col md={12} xl={6} className="load-update-buttons">
          <FormGroup className="registration-button">
            <Button className="btn-success" type="submit">
              Save
            </Button>
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
