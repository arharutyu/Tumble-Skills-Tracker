import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { del } from '../api/api'
import { API_BASE_URL } from '../api/endpoints'
import adminCog from '../assets/settings.png'

const AdminMenu = ({ id, type, isAdmin, accessToken }) => {
  const nav = useNavigate()
  
  // State to control the visibility of the Offcanvas
  const [show, setShow] = useState(false)

  // Close/open the Offcanvas
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // Handle the delete action
  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this student?")
    if (confirmed) {
    await del(type, id, accessToken).then(data => console.log(data))
    console.log('Deleted')
    // Navigate back to all students/users page
    nav(type)
  }}

  return (
    <>
      <Button variant="primary" onClick={handleShow} id="admin">
          <img src={adminCog} width="25px" alt="" />
        </Button>

        <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Admin</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <p><Link to={`${type}/edit/${id}`}>Edit details</Link></p>
            <p><Link to={`${type}`} onClick={handleDelete}>Delete</Link></p>
          </Offcanvas.Body>

        </Offcanvas>
    </>
  )
}

export default AdminMenu