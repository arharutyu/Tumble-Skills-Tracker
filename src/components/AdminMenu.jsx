import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link } from 'react-router-dom'

const AdminMenu = ({ id, type }) => {
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
            <Link to={`/${type}/${id}/edit`}>Edit details</Link>
            <p>Delete</p>
          </Offcanvas.Body>

        </Offcanvas>
    </>
  )
}

export default AdminMenu