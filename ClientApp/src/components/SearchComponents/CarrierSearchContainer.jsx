import React, { useState } from 'react'
import { Input, Button, Col, FormGroup, Label } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
// import './styles/search.scss'
const CarrierSearchContainer = ({
  labelTop,
  nameTop,
  labelBottom,
  nameBottom,
  placeholderBottom,
}) => {
  const [search, setSearch] = useState()
  const [searchSuccessful, setSearchSuccessful] = useState({
    shouldRedirect: false,
    searchCarrierInfo: {},
  })
  const getCarrierByMC = async () => {
    const resp = await axios.get(`api/search/carriers?search=${search}`)
    console.log(resp.status)
    if (resp.status === 200) {
      setSearchSuccessful({
        shouldRedirect: true,
        searchCarrierInfo: resp.data,
      })
    } else {
      alert('Carrier not found. Please confirm MC Number or search by name.')
    }
  }
  const getCarrierByName = async () => {
    console.log('getting', search)
    const resp = await axios.get(`api/search/carriers/name?search=${search}`)
    console.log(resp)
    if (resp.status === 200) {
      setSearchSuccessful({
        shouldRedirect: true,
        searchCarrierInfo: resp.data,
      })
    } else {
      alert('Carrier not found. Please confirm Name or search by MC number.')
    }
  }
  if (searchSuccessful.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/carriers/${searchSuccessful.searchCarrierInfo.id}`,
        }}
      />
    )
  }

  return (
    <>
      <Col sm={1} md={12}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label>{labelTop}</Label>
          <Input
            type="search"
            placeholder="123456"
            name={nameTop}
            onChange={e => parseInt(setSearch(e.target.value))}
          />
          <Button className="btn btn-info" onClick={getCarrierByMC}>
            Search
          </Button>
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
            onChange={e => setSearch(e.target.value)}
          />
          <Button className="btn btn-info" onClick={getCarrierByName}>
            Search
          </Button>
        </FormGroup>
      </Col>
    </>
  )
}

export default CarrierSearchContainer
