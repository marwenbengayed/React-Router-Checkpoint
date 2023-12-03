//MovieCard.js
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Rating from '@mui/material/Rating';
import Badge from 'react-bootstrap/Badge';

function MovieCardView(props) {
  const movie = props.movie
  return (
    /* a card to display echt movie variable */
    <Link style={{ textDecoration: 'none' }} to={`/movielist/${movie.title}`} state={movie} >
    <Card bg="dark" className="movie-card">
      <img src={movie.posterURL} alt="" />
      <Card.Body>
        <Card.Title className="text-success">{movie.title}</Card.Title>
        <Card.Text className="description-color" >
          {movie.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Stack direction="horizontal" gap={3}>
          <h6 className="p-2 description-color">Rating</h6>
          <div className="p-2 ms-auto">
            <Badge bg="secondary">
              <Rating name="half-rating-read" value={movie.rating} precision={0.5} readOnly />
            </Badge>
          </div>
        </Stack>
      </Card.Footer>
    </Card>
    </Link>
  );
}

export default MovieCardView;
