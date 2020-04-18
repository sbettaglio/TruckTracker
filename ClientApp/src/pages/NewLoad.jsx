import React from 'react'

import { Container } from 'reactstrap'
import CreateNewLoad from '../components/SignUpForms/CreateNewLoad'
import CustomNav from '../components/NavMenu/CustomNav'

const NewLoad = () => {
  return (
    <>
      <CustomNav />
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
