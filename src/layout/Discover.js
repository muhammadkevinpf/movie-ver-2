import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../component/Cards";
import { fetchDiscover } from "../redux/action/movieAction";
import { connect } from "react-redux";
import { displaySkeleton } from "../component/util/componentRender";
import Pagination from "../component/Paging";
function Discover({
  fetchDiscover,
  movie: { movies, loading, totalPage, currentPage },
}) {
  useEffect(() => {
    async function discoverData() {
      await fetchDiscover(currentPage);
    }
    discoverData();
  }, [fetchDiscover, currentPage]);

  const skeleteonArray = [];

  for (let i = 0; i < 20; i++) {
    skeleteonArray.push(displaySkeleton());
  }

  const displayData = () =>
    movies.map((item) => (
      <Col sm={6} md={4} xl={3} key={item.id}>
        <Cards data={item} />
      </Col>
    ));

  return (
    <Container fluid>
      <h3 className="font-weight-bold">Discover</h3>
      <Row>{loading ? skeleteonArray : displayData()}</Row>
      <Pagination totalPages={totalPage} currentPage={currentPage} />
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
