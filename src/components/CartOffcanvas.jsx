import React from "react";
import { Offcanvas } from "react-bootstrap";

const CartOffcanvas = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>🛒 Added Food Items</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {/* Your cart cards will go here */}
        <p>No items added yet.</p>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartOffcanvas;