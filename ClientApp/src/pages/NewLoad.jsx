import React from 'react'

import { Container } from 'reactstrap'
import CreateNewLoad from '../components/SignUpForms/CreateNewLoad'
import CustomNav from '../components/NavMenu/CustomNav'

const NewLoad = () => {
  return (
    <>
      <CustomNav />
      <Container>
        <CreateNewLoad />
      </Container>
    </>
  )
}

export default NewLoad
