
export const Movie = (props)=>{
    const movie = props.movie;

    return (
        <div className="Movie">
            <p className="movie-content"><span className="cat">Id:</span>{movie.id}</p>
            <p className="movie-content"><span className="cat">Name:</span>{movie.name}</p>
            <p className="movie-content"><span className="cat">Genre:</span>{movie.genre}</p>
            <p className="movie-content"><span className="cat">Rating:</span>{movie.rating}</p>
            <p className="movie-content"><span className="cat">duration:</span>{movie.duration}</p>
            <p className="movie-content"><span className="cat">released-year:</span>{movie.year}</p>
        </div>
    );
}