import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import CustomNav from '../NavMenu/CustomNav'
const CreateNewLoad = () => {
  // const [load, setLoad] = useState({
  //   distance: 0,
  //   transitTime: '',
  // })
  const { register, handleSubmit, errors } = useForm()
  const [wasSuccessfullyCreated, setWasSuccessfullyCreated] = useState({
    shouldRedirect: false,
    newLoadInformation: {},
  })

  const saveLoad = async data => {
    data.carrierRate = parseInt(data.carrierRate)
    data.customerRate = parseInt(data.customerRate)
    data.weight = parseInt(data.customerRate)
    console.log(data)
    const resp = await axios.post('api/Loads', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    console.log(resp.data)
    if (resp.status === 201) {
      setWasSuccessfullyCreated({
        shouldRedirect: true,
        newLoadInformation: resp.data,
      })
    }
  }
  if (wasSuccessfullyCreated.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/loadtracker/${wasSuccessfullyCreated.newLoadInformation.id}`,
          state: { load: wasSuccessfullyCreated.newLoadInformation },
        }}
      />
    )
  } else {
    return (
      <>
        <Form onSubmit={handleSubmit(saveLoad)}>
          <Row>
            <Col md={8}>
              <FormGroup>
                <Label className="lead">
                  <h6>P/U City, State</h6>
                </Label>
                <input
                  className="form-control"
                  type="text"
                  name="pickCity"
                  // onChange={trackInput}
                  ref={register({ required: true })}
                ></input>
                {errors.pickCity && (
                  <h6 className="lead">
                    This field is required to create a load
                  </h6>
                )}
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label className="lead">
                  <h6>P/U Date</h6>
                </Label>
                <input
                  className="form-control"
                  type="datetime-local"
                  name="pickApp"
                  ref={register({ required: true })}
                  // onChange={trackInput}
                ></input>
                {errors.pickApp && (
                  <h6 className="lead">
                    This field is required to create a load
                  </h6>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <FormGroup>
                <Label className="lead">
                  <h6>D/O City, State</h6>
                </Label>
                <input
                  className="form-control"
                  type="text"
                  name="dropCity"
                  ref={register({ required: true })}
                  // onChange={trackInput}
                ></input>
                {errors.dropCity && (
                  <h6 className="lead">
                    This field is required to create a load
                  </h6>
                )}
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label className="lead">
                  <h6>D/O Date</h6>
                </Label>
                <input
                  className="form-control"
                  type="datetime-local"
                  name="dropApp"
                  ref={register({ required: true })}
                  // onChange={trackInput}
                ></input>
                {errors.dropApp && (
                  <h6 className="lead">
                    This field is required to create a load
                  </h6>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label className="lead">
                  <h6>Weight</h6>
                </Label>
                <input
                  className="form-control"
                  type="number"
                  name="weight"
                  ref={register({
                    required: true,
                    valueAsNumber: true,
                  })}
                  // onChange={trackInput}
                ></input>
                {errors.weight && (
                  <h6 className="lead">
                    This field is required to create a load
                  </h6>
                )}
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className="lead">
                  <h6>Commodity</h6>
                </Label>
                <input
                  className="form-control"
                  type="text"
                  name="commodity"
                  ref={register({ required: true })}
                  // onChange={trackInput}
                ></input>
                {errors.commodity && (
                  <h6 className="lead">
                    This field is required to create a load
                  </h6>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <FormGroup>
                <Label className="lead">
                  <h6>Customer Rate</h6>
                </Label>
                <input
                  className="form-control"
                  type="number"
                  name="customerRate"
                  ref={register({
                    required: true,
                    valueAsNumber: true,
                  })}
                  // onChange={trackInput}
                ></input>
                {errors.customerRate && (
                  <h6 className="lead">
                    This field is required to create a load
                  </h6>
                )}
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup>
                <Label className="lead">
                  <h6>Carrier Rate</h6>
                </Label>
                <input
                  className="form-control"
                  type="number"
                  name="carrierRate"
                  ref={register({
                    required: true,
                  })}
                  // onChange={trackInput}
                ></input>
                {errors.carrierRate && (
                  <h6 className="lead">
                    This field is required to create a load
                  </h6>
                )}
              </FormGroup>
            </Col>
            <Col md={2}>
              <Button className="btn btn-success" type="submit">
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </>
    )
  }
}

export default CreateNewLoad
