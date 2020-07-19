import Skeleton from "react-loading-skeleton";
import React from "react";
import { Col } from "react-bootstrap";
const displaySkeleton = () => (
  <Col sm={6} md={4} xl={3} className="mb-4">
    <Skeleton height={350} />
  </Col>
);

export { displaySkeleton };
