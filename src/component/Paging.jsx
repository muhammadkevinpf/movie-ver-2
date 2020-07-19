import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

function Paging() {
  const [current, setCurrent] = useState(1);
  const setFirst = setCurrent(1);
  return (
    <Pagination className="justify-content-center">
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default Paging;
