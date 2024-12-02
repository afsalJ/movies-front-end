
export const Movie=(props)=>{
    const movie = props.movie;

    return (
        <div className="Movie">
            <p className="movie-content name"><span className="cat">{movie.name}</span></p>
            <div className="others">
                <p className="movie-content"><span className="cat">Id:</span>{movie?.id}</p>
                <p className="movie-content"><span className="cat">Genre:</span>{movie?.genre}</p>
                <p className="movie-content"><span className="cat">Rating:</span>{movie?.rating}</p>
                <p className="movie-content"><span className="cat">Duration:</span>{movie?.duration}</p>
                <p className="movie-content"><span className="cat">Release year:</span>{movie?.year}</p>
            </div>
        </div>
    );
}