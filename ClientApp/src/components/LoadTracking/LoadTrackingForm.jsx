import React from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap'
const LoadTrackingForm = ({ load, track, save }) => {
  // const trackLoad = e => {
  //   const fieldToUpdate = e.target.name
  //   console.log(fieldToUpdate)
  //   let value = e.target.value
  //   if (value === 'on') {
  //     value = true
  //   }
  //   console.log(value)
  //   setLoad(prevLoad => {
  //     prevLoad[fieldToUpdate] = value
  //     return prevLoad
  //   })
  // }

  // const sendLoadUpdateToApi = async () => {
  //   // console.log('updating', load)
  //   const resp = await axios.put(`api/Loads/${id}/update`, load)
  //   if (resp.status === 200) {
  //     setLoad(resp.data)
  //     alert('Load has been updated')
  //   }
  // }

  // useEffect(() => {
  //   getLoadData()
  // }, [])

  return (
    <>
      <Container>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label for="loadStatus">Load Status</Label>
                <Input
                  className="form-control"
                  type="select"
                  name="loadStatus"
                  id="loadStatus"
                  onChange={track}
                  value={load.loadStatus}
                >
                  <option value="Available">Available</option>
                  <option value="Pick on way">Pick on way</option>
                  <option value="Pick late">Pick late</option>
                  <option value="At shipper">At shipper</option>
                  <option value="Loading">Loading</option>
                  <option value="On route">On Route</option>
                  <option value="Rolling Late">Rolling Late</option>
                  <option value="At Drop">At drop</option>
                  <option value="Unloading">Unloading</option>
                  <option value="Empty">Empty</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="exampleDateTime">ETA to Pick</Label>
                <Input
                  name="pickEta"
                  type="datetime-local"
                  id="exampleDateTime"
                  onChange={track}
                  value={load.pickEta}
                ></Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Checked-in</Label>
                <Input
                  name="pickCheckIn"
                  type="datetime-local"
                  onChange={track}
                  value={load.pickCheckIn}
                ></Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Checked-out</Label>
                <Input
                  name="pickCheckOut"
                  type="datetime-local"
                  onChange={track}
                  value={load.pickCheckOut}
                ></Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup>
                <Label>ETA to Drop</Label>
                <Input
                  name="dropEta"
                  type="datetime-local"
                  onChange={track}
                  value={load.dropEta}
                ></Input>
              </FormGroup>
            </Col>

            <Col>
              <FormGroup>
                <Label>Checked-in</Label>
                <Input
                  name="dropCheckIn"
                  type="datetime-local"
                  value={load.dropCheckIn}
                  onChange={track}
                ></Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Checked-out</Label>
                <Input
                  name="dropCheckOut"
                  type="datetime-local"
                  value={load.dropCheckOut}
                  onChange={track}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup className="registration-button">
                <Button className="btn-success" onClick={save}>
                  Save
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  )
}

export default LoadTrackingForm
