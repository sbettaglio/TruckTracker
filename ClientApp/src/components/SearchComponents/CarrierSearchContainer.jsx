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
// import './styles/search.scss'
const CarrierSearchContainer = ({
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

export default CarrierSearchContainer
