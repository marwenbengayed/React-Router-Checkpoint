import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Rating from '@mui/material/Rating';
import Badge from 'react-bootstrap/Badge';

function MovieDetailsView({ movies }) {

    {/* use location to retrive the data (movie) */}
    const location = useLocation();
    const movie = location.state;

    {/* use navigation to implement the back button */}
    const navigate = useNavigate();

    return (
        <div className="App">
            <Card bg="dark" className="movie-details">
            <ReactPlayer  url={movie.trailerlink}  />
                <Card.Body>
                    <Card.Title className="text-success">{movie.title}</Card.Title>
                    <Card.Text className="description-color" >
                        {movie.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Stack direction="horizontal" gap={3}>
                        <div className="p-2 ms-auto">
                            <Badge bg="secondary">
                                <Rating name="half-rating-read" value={movie.rating} precision={0.5} readOnly />
                            </Badge>
                        </div>
                    </Stack>
                    <Button variant="contained" color="primary" startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)}>
                        Back To Home
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default MovieDetailsView;