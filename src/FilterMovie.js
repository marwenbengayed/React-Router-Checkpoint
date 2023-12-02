//FilterMovie.js
import React from "react";
import './App.css'
import Badge from 'react-bootstrap/Badge';
import AddMovies from "./AddMovies";
import Rating from '@mui/material/Rating';

function FilterMovie({ setFilterbytitle, setFilterbyrating, rating, addMovie }) {
    return (

        <div className="searchBar">
            <AddMovies addMovie={addMovie} />
            {/* search text field to filter movie by title */}
            <input
                className="inputsearch"
                type="text"
                placeholder="Search movie by title"
                onChange={(e) => setFilterbytitle(e.target.value)}
            />
            {/* rating field to filter movie by rating */}
            <Badge bg="secondary">
                <Rating
                    name="half-rating"
                    value={rating}

                    precision={0.5}
                    onChange={(event, newValue) => {
                        setFilterbyrating(newValue);
                    }}
                />
            </Badge>
        </div>

    );
}

export default FilterMovie;
