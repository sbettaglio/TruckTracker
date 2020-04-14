import React from 'react'
import {
  Container,
  Form,
  Input,
  Button,
  Row,
  Col,
  FormGroup,
  Label,
} from 'reactstrap'
import './styles/search.scss'
const SearchPage = () => {
  return (
    <>
      <div className="title-div">
        <h1>Search</h1>
      </div>
      <main>
        <Container>
          <Form inline>
            <Row>
              <Col sm={1} md={12}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label>MC Number</Label>
                  <Input type="search" placeholder="123456" />
                  <Button className="btn btn-info">Search</Button>
                </FormGroup>
              </Col>
              <Col sm={1} md={12}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label>Carrier Name</Label>
                  <Input
                    type="search"
                    placeholder="Lorem Ipsum Express"
                    className="mr-sm-2"
                  />
                  <Button className="btn btn-info">Search</Button>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={1} md={12}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label>Load Number</Label>
                  <Input
                    type="search"
                    placeholder="123456"
                    className="mr-sm-2"
                  />
                  <Button className="btn btn-info">Search</Button>
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label>Pick City</Label>
                  <Input
                    type="search"
                    placeholder="St. Pete, FL"
                    className="mr-sm-2"
                  />
                  <Button className="btn btn-info">Search</Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Container>
      </main>
    </>
  )
}

export default SearchPage
