import React, { useState } from 'react'
import { Input, Button, Col, FormGroup, Label } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
const LoadSearchContainer = ({
  labelTop,
  nameTop,
  labelBottom,
  nameBottom,
  placeholderBottom,
}) => {
  const [searchId, setSearchId] = useState()
  const [searchCity, setSearchCity] = useState('')
  const [loadSearchSuccessful, setLoadSearchSuccessful] = useState({
    shouldRedirect: false,
    searchResult: {},
  })
  const [citySearchSuccessful, setCitySearchSuccessful] = useState({
    shouldRedirect: false,
    searchResult: [{}],
  })
  const searchById = async () => {
    console.log('searching for', searchId)
    const resp = await axios.get(`api/Loads/${searchId}`)
    console.log(resp, resp.data)
    if (resp.status === 200) {
      setLoadSearchSuccessful({
        shouldRedirect: true,
        searchResult: resp.data,
      })
    }
  }
  const searchByCity = async () => {
    console.log('searching for', searchCity)
    const resp = await axios.get(`/api/search/loads?searchCity=${searchCity}`)
    console.log(resp.data, resp.status)
    if (resp.status === 200) {
      setCitySearchSuccessful({
        shouldRedirect: true,
        searchResult: resp.data,
      })
    }
  }
  if (loadSearchSuccessful.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/loadtracker/${loadSearchSuccessful.searchResult.id}`,
        }}
      />
    )
  } else if (citySearchSuccessful.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/search/city`,
          state: citySearchSuccessful.searchResult,
        }}
      />
    )
  } else {
    return (
      <>
        <Col sm={1} md={12}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label>{labelTop}</Label>
            <Input
              type="search"
              placeholder="123456"
              value={searchId}
              name={nameTop}
              onChange={e => parseInt(setSearchId(e.target.value))}
            />
            <Button className="btn btn-info" onClick={searchById}>
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
              value={searchCity}
              placeholder={placeholderBottom}
              className="mr-sm-2"
              onChange={e => setSearchCity(e.target.value)}
            />
            <Button className="btn btn-info" onClick={searchByCity}>
              Search
            </Button>
          </FormGroup>
        </Col>
      </>
    )
  }
}

export default LoadSearchContainer
