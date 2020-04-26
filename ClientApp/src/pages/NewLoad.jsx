import React from 'react'
import { Container } from 'reactstrap'
import CreateNewLoad from '../components/NewLoad/CreateNewLoad'
import CustomNav from '../components/NavMenu/CustomNav'
import './styles/new-load.scss'

const NewLoad = () => {
  return (
    <>
      <CustomNav />
      <main className="new-load">
        <Container className="new-load-container">
          <CreateNewLoad />
        </Container>
      </main>
    </>
  )
}

export default NewLoad
