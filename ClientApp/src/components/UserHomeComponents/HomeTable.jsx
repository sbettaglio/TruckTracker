import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Container } from 'reactstrap'
import HomeCard from './HomeCard'
const HomeTable = () => {
  return (
    <>
      <Container>
        <HomeCard text="Today's Picks" link="picks" />
        <HomeCard text="Today's Drops" link="drops" />
        <HomeCard text="Late Trucks" link="late" />
        <HomeCard text="Available Loads" link="available" />
        <HomeCard text="Create New Load" link="create" />
        <HomeCard text="Add New Carrier" link="newCarrier" />
        <HomeCard text="Search" link="search" />
      </Container>
    </>
  )
}

export default HomeTable
