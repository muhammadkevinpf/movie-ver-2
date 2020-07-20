import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

function Paging() {
  const [current, setCurrent] = useState(1);

  const onClickFirst = () => {
    setCurrent(1);
  };

  const onClickNext = () => {
    setCurrent(current + 1);
  };

  const onClickPrev = () => {
    setCurrent(current - 1);
  };

  const onNumberClick = (currentNumber) => {
    setCurrent(currentNumber);
  };

  const displayPaginationItem = () => (
    <React.Fragment>
      <Pagination.Item active>{current}</Pagination.Item>
      <Pagination.Item onClick={() => onNumberClick(current + 1)}>
        {current + 1}
      </Pagination.Item>
      <Pagination.Item onClick={() => onNumberClick(current + 2)}>
        {current + 2}
      </Pagination.Item>
      <Pagination.Item onClick={() => onNumberClick(current + 3)}>
        {current + 3}
      </Pagination.Item>
    </React.Fragment>
  );

  return (
    <Pagination className="justify-content-center">
      <Pagination.First
        onClick={onClickFirst}
        disabled={current === 1 ? true : false}
      />
      <Pagination.Prev
        onClick={onClickPrev}
        disabled={current === 1 ? true : false}
      />
      {displayPaginationItem()}
      <Pagination.Next onClick={onClickNext} />
      <Pagination.Last />
    </Pagination>
  );
}

export default Paging;
