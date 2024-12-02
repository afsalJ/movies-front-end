// MovieApp.js
import React, { useState } from 'react';
import axios from 'axios';
import { Movie } from './Movie';

const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [message, setMessage] = useState('');
  
  // Movie data for adding/updating a movie
  const [movieData, setMovieData] = useState({
    name: '',
    genre: '',
    rating: '',
    duration: '',
    year: ''
  });
  const [movieId, setMovieId] = useState(''); // For update/delete operations
  
  const API_URL = 'http://localhost:8080/api/movies';

  // Fetch all movies
  const getAllMovies = async () => {
    try {
      const response = await axios.get(`${API_URL}/getAll`);
      setMovies(response.data);
      setMessage('');
    } catch (error) {
      setMessage('Error fetching movies.');
    }
  };

  // Fetch movie by name
  const getMovieByName = async () => {
    try {
      const response = await axios.get(`${API_URL}/getByName/${movieData.name}`);
      setMovies(response.data);
      setMessage('');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error fetching movie by name.');
    }
  };

  // Add a new movie
  const addMovie = async () => {
    try {
      const response = await axios.post(`${API_URL}/addMovie`, movieData);
      setMessage('Movie added successfully!');
      setMovies([...movies, response.data]);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error adding movie.');
    }
  };

  // Update a movie
  const updateMovie = async () => {
    try {
      const response = await axios.put(`${API_URL}/updateMovie/${movieId}`, movieData);
      setMessage('Movie updated successfully!');
      setMovie(response.data);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error updating movie.');
    }
  };

  // Delete movie by name
  const deleteMovie = async () => {
    try {
      const response = await axios.delete(`${API_URL}/deleteByName/${movieData.name}`);
      setMessage(response.data.movie || 'Movie deleted successfully!');
      setMovies(movies.filter(m => m.name !== movieData.name));
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error deleting movie.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Movie Management App</h2>
      
      {message && <p>{message}</p>}
      
      <div>
        <button onClick={getAllMovies}>Get All Movies</button>
        <ol>
          {movies.map(movie => (
            <li key={movie.id}><Movie movie={movie}/></li>
          ))}
        </ol>
      </div>
      
      <div>
        <h3>Get Movie by Name</h3>
        <input
          type="text"
          placeholder="Movie Name"
          value={movieData.name}
          onChange={(e) => setMovieData({ ...movieData, name: e.target.value })}
        />
        <button onClick={getMovieByName}>Get Movie</button>
        {movie && <p>{movie.name} - {movie.genre}</p>}
      </div>

      <div>
        <h3>Add Movie</h3>
        <input
          type="text"
          placeholder="Name"
          value={movieData.name}
          onChange={(e) => setMovieData({ ...movieData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Genre"
          value={movieData.genre}
          onChange={(e) => setMovieData({ ...movieData, genre: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating"
          value={movieData.rating}
          onChange={(e) => setMovieData({ ...movieData, rating: e.target.value })}
        />
        <input
          type="text"
          placeholder="Duration"
          value={movieData.duration}
          onChange={(e) => setMovieData({ ...movieData, duration: e.target.value })}
        />
        <input
          type="number"
          placeholder="Year"
          value={movieData.year}
          onChange={(e) => setMovieData({ ...movieData, year: e.target.value })}
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>

      <div>
        <h3>Update Movie</h3>
        <input
          type="number"
          placeholder="Movie ID"
          value={movieId}
          onChange={(e) => setMovieId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={movieData.name}
          onChange={(e) => setMovieData({ ...movieData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Genre"
          value={movieData.genre}
          onChange={(e) => setMovieData({ ...movieData, genre: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating"
          value={movieData.rating}
          onChange={(e) => setMovieData({ ...movieData, rating: e.target.value })}
        />
        <input
          type="text"
          placeholder="Duration"
          value={movieData.duration}
          onChange={(e) => setMovieData({ ...movieData, duration: e.target.value })}
        />
        <input
          type="number"
          placeholder="Year"
          value={movieData.year}
          onChange={(e) => setMovieData({ ...movieData, year: e.target.value })}
        />
        <button onClick={updateMovie}>Update Movie</button>
      </div>

      <div>
        <h3>Delete Movie by Name</h3>
        <input
          type="text"
          placeholder="Movie Name"
          value={movieData.name}
          onChange={(e) => setMovieData({ ...movieData, name: e.target.value })}
        />
        <button onClick={deleteMovie}>Delete Movie</button>
      </div>
    </div>
  );
};

export default MovieApp;
