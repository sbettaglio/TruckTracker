import React from 'react'
import { Input, Button, Col, FormGroup, Label } from 'reactstrap'
const LoadSearchContainer = ({
  labelTop,
  nameTop,
  labelBottom,
  nameBottom,
  placeholderBottom,
}) => {
  return (
    <>
      <Col sm={1} md={12}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label>{labelTop}</Label>
          <Input type="search" placeholder="123456" name={nameTop} />
          <Button className="btn btn-info">Search</Button>
        </FormGroup>
      </Col>
      <Col sm={1} md={12}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label>{labelBottom}</Label>
          <Input
            type="search"
            name={nameBottom}
            placeholder={placeholderBottom}
            className="mr-sm-2"
          />
          <Button className="btn btn-info">Search</Button>
        </FormGroup>
      </Col>
    </>
  )
}

export default LoadSearchContainer
