import React from "react";
import { Row } from "react-bootstrap";
import Hamburger from "./Hamburger";
function Navbar() {
  return (
    <Row className="nav">
      <input
        type="text"
        className="form-control input-text"
        name="search"
        placeholder="Search"
        autoComplete="off"
      />
      <Hamburger />
    </Row>
  );
}

export default Navbar;
