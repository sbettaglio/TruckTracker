import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import CreateNewLoad from '../components/SignUpForms/CreateNewLoad'

const NewLoad = () => {
  return (
    <>
      <div className="title-div">
        <h1>Create New Load</h1>
      </div>
      <Container>
        <CreateNewLoad />
      </Container>
    </>
  )
}

export default NewLoad
