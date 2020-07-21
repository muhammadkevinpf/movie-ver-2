import React from "react";
import { Card } from "react-bootstrap";
import "../assets/css/card.scss";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
function Cards({ data, type }) {
  const cardLink = () => (type === "movie" ? "movie" : "tv");

  return (
    <Card className="mb-5">
      <div className="card-detail-wrapper">
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        />
        <div className="card-detail">
          <h6 className="font-weight-bold">
            {data.title || data.original_name}
          </h6>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <StarRatings
              rating={data.vote_average / 2}
              starRatedColor="yellow"
              numberOfStars={5}
              starDimension="20px"
              name={data.title || data.original_name}
            />
            <span className="pt-2 font-weight-bold">{data.vote_average}</span>
          </div>
          <p id="movie-overview">{data.overview}</p>
        </div>
      </div>
      <Card.Body>
        <Card.Title title={data.title}>
          <Link to={`/${cardLink()}/${data.id}`}>
            {data.title || data.original_name}
          </Link>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Cards;
