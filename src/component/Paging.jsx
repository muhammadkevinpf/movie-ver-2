import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import { connect } from "react-redux";
import { setCurrentPage } from "../redux/action/movieAction";
function Paging({ totalPages, setCurrentPage, currentPage }) {
  const [current, setCurrent] = useState(1);

  const onClickNext = () => {
    setCurrent(current + 1);
  };

  const onClickPrev = () => {
    setCurrent(current - 1);
  };

  const onNumberClick = (currentNumber) => {
    setCurrent(currentNumber);
    setCurrentPage(currentNumber);
  };

  const setActive = (pageNumber) => (pageNumber === currentPage ? true : false);

  const displayPaginationItem = () => (
    <React.Fragment>
      <Pagination.Item
        active={setActive(current)}
        onClick={() => onNumberClick(current)}
      >
        {current}
      </Pagination.Item>
      <Pagination.Item
        onClick={() => onNumberClick(current + 1)}
        active={setActive(current + 1)}
      >
        {current + 1}
      </Pagination.Item>
      <Pagination.Item
        onClick={() => onNumberClick(current + 2)}
        active={setActive(current + 2)}
      >
        {current + 2}
      </Pagination.Item>
      <Pagination.Item
        onClick={() => onNumberClick(current + 3)}
        active={setActive(current + 3)}
      >
        {current + 3}
      </Pagination.Item>
    </React.Fragment>
  );

  return (
    <Pagination className="justify-content-center">
      <Pagination.Prev
        onClick={onClickPrev}
        disabled={current === 1 ? true : false}
      />
      {displayPaginationItem()}
      <Pagination.Next
        onClick={onClickNext}
        disabled={current === totalPages ? true : false}
      />
    </Pagination>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movie,
});

const mapActionToProps = {
  setCurrentPage,
};

export default connect(mapStateToProps, mapActionToProps)(Paging);
