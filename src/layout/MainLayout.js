import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../component/Cards";
import { fetchMovieOrTv } from "../redux/action/movieAction";
import { connect } from "react-redux";
import { displaySkeleton } from "../component/util/componentRender";
import Pagination from "../component/Paging";
function MainLayout({
  fetchMovieOrTv,
  movie: { movies, loading, totalPage, currentPage },
  type,
  status,
}) {
  useEffect(() => {
    async function discoverData() {
      await fetchMovieOrTv(type, status, currentPage);
    }
    const element = document.querySelector("#page-content-wrapper");
    element.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    discoverData();
  }, [fetchMovieOrTv, currentPage, type, status]);

  const skeleteonArray = [];

  for (let i = 0; i < 20; i++) {
    skeleteonArray.push(displaySkeleton());
  }

  const displayData = () =>
    movies.map((item) => (
      <Col sm={6} md={4} xl={3} key={item.id}>
        <Cards data={item} type="movie" />
      </Col>
    ));

  const titleCase = (str) => {
    return str
      .toLowerCase()
      .split("_")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  return (
    <Container fluid>
      <h3 className="font-weight-bold">{titleCase(status)}</h3>
      <Row>{loading ? skeleteonArray : displayData()}</Row>
      <Pagination totalPages={totalPage} currentPage={currentPage} />
    </Container>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movie,
});

const mapActionToProps = {
  fetchMovieOrTv,
};

export default connect(mapStateToProps, mapActionToProps)(MainLayout);
