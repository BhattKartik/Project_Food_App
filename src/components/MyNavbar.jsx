import React, { useState } from "react";
import { Navbar, Container, Button, Offcanvas, Badge } from "react-bootstrap"; // ✅ Badge added
import { Link } from "react-router-dom";
import "./myNavbar.css";

const MyNavbar = ({ search, setSearch, cartCount }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <div className="d-flex align-items-center justify-content-between w-100 py-3">
          {/* Logo */}
          <div className="me-3">LOGO</div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="form-control mx-3 flex-grow-1"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          {/* Nav + Cart */}
          <ul className="d-flex list-unstyled gap-4 mb-0 align-items-center">
            <li>
              <Link className="nav-link-custom fs-4" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link-custom fs-4" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link-custom fs-4" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="nav-link-custom fs-4" to="/login">
                Login
              </Link>
            </li>

            <li>
              <Button
                variant="primary"
                onClick={handleShow}
                className="position-relative"
                style={{ fontSize: "24px", background: "none", border: "none" }}
              >
                🛒
                <Badge
                  bg="danger"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                  style={{ fontSize: "11px" }}
                >
                  {cartCount}
                </Badge>
              </Button>
            </li>
          </ul>
        </div>
      </Container>

      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop="static"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Added Food Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Write the code for the card which will be shown here when we click the
          add button
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
};

export default MyNavbar;
