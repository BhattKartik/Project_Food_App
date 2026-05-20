import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./myNavbar.css";

const MyNavbar = ({search,setSearch}) => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <div className="d-flex align-items-center justify-content-between w-100 py-3">

          {/* Logo */}
          <div className="me-3">LOGO</div>

          {/* Search (IMPORTANT) */}
          <input
            type="text"
            placeholder="Search..."
            className="form-control mx-3 flex-grow-1"
            value={search}
            onChange={(event)=>setSearch(event.target.value)}
          />

          {/* Nav + Cart together */}
          <ul className="d-flex list-unstyled gap-4 mb-0 align-items-center">
            <li><Link className="nav-link-custom fs-4" to="/">Home</Link></li>
            <li><Link className="nav-link-custom fs-4" to="/about">About</Link></li>
            <li><Link className="nav-link-custom fs-4" to="/contact">Contact</Link></li>
            <li><Link className="nav-link-custom fs-4" to="/login">Login</Link></li>
            <li>🛒</li>
          </ul>

        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;