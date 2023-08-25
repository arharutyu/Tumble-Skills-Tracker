import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'

const AdminMenu = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)


  return (
    <>
      <Button variant="primary" onClick={handleShow} id="admin">
          Admin
        </Button>

        <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Admin</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <p>Edit details</p>
            <p>Delete</p>
          </Offcanvas.Body>

        </Offcanvas>
    </>
  )
}

export default AdminMenu