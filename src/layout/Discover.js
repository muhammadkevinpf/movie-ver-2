import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../component/Cards";
import { fetchDiscover } from "../redux/action/movieAction";
import { connect } from "react-redux";
function Discover({ fetchDiscover, movie: { movies } }) {
  useEffect(() => {
    fetchDiscover();
  }, [fetchDiscover]);
  return (
    <Container fluid>
      <h3 className="font-weight-bold">Discover</h3>
      <Row>
        {movies.map((item) => (
          <Col sm={12} md={4} xl={3} key={item.id}>
            <Cards data={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movie,
});

const mapActionToProps = {
  fetchDiscover,
};

export default connect(mapStateToProps, mapActionToProps)(Discover);
