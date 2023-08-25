import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { del } from '../api/api'

const AdminMenu = ({ id, type }) => {
  const nav = useNavigate()
  
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleDelete = async () => {
    await del(type, id).then(data => console.log(data))
    console.log('Deleted')
    nav('/students')
  }

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
            <p><Link to={`/${type}/${id}/edit`}>Edit details</Link></p>
            <p><Link to="/students" onClick={handleDelete}>Delete</Link></p>
          </Offcanvas.Body>

        </Offcanvas>
    </>
  )
}

export default AdminMenu