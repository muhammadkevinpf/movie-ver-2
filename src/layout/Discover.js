import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../component/Cards";
function Discover() {
  return (
    <Container fluid>
      <h3 className="font-weight-bold">Discover</h3>
      <Row>
        <Col sm={12} md={4} xl={3}>
          <Cards />
        </Col>
      </Row>
    </Container>
  );
}

export default Discover;
