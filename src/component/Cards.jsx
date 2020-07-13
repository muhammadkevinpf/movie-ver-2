import React from "react";
import { Card } from "react-bootstrap";
import "../assets/css/card.scss";
function Cards({ data }) {
  return (
    <Card className="mb-5">
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
      />
      <Card.Body>
        <Card.Title title={data.title}>{data.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Cards;
