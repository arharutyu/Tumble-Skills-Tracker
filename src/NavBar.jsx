import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (

    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          <img src="https://eliteallstars.com.au/wp-content/uploads/2019/06/eliteAsset-2.png" alt="Logo" width="100"></img>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" href="#">Home</Link>
            <Link className="nav-link" href="#">Students</Link>
            <Link className="nav-link" href="#">Skills</Link>
            <Link className="nav-link" href="#">New Assessment</Link>
            <Link className="nav-link disabled" aria-disabled="true">Users</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar