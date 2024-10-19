import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      

<nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Leave Management App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/searchleavestud">Search_Student</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/searchleavefaculty">Search_Faculty</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/viewStud">view_Student</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/viewFaculty">view_Faculty</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar