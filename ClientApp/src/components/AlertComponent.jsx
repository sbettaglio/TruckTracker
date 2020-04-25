import React from 'react'
import { Alert } from 'reactstrap'
const AlertComponent = ({ isOpen, toggle, fade, msg }) => {
  return (
    <>
      <Alert color="danger" isOpen={isOpen} toggle={toggle} fade={fade}>
        {msg}
      </Alert>
    </>
  )
}

export default AlertComponent
