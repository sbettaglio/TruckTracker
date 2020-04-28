import React from 'react'
import { Container } from 'reactstrap'
import CreateNewLoad from '../components/NewLoad/CreateNewLoad'
import CustomNav from '../components/NavMenu/CustomNav'
import './styles/new-load.scss'
import Footer from '../components/Footer/Footer'

const NewLoad = () => {
  return (
    <>
      <CustomNav />
      <main className="new-load">
        <Container className="new-load-container">
          <CreateNewLoad />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default NewLoad
