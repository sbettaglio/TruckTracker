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
    try {
      const resp = await axios.get(`api/Loads/${searchId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      if (resp.status === 200) {
        setLoadSearchSuccessful({
          shouldRedirect: true,
          searchResult: resp.data,
        })
      }
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const searchByCity = async () => {
    console.log('searching for', searchCity)
    const resp = await axios.get(`/api/search/loads?searchCity=${searchCity}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    console.log(resp.data, resp)
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
          state: { load: citySearchSuccessful.searchResult },
        }}
      />
    )
  } else if (citySearchSuccessful.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/search/${searchCity}`,
          state: citySearchSuccessful.searchResult,
        }}
      />
    )
  } else {
    return (
      <>
        <Col xs={12}>
          <FormGroup className="search-group">
            <Label>
              <h5>{labelTop}</h5>
            </Label>
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
        <Col>
          <FormGroup className="search-group">
            <Label>
              <h5>{labelBottom}</h5>
            </Label>
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
