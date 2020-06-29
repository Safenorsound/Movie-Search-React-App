import React, { useState } from 'react';

export default function SearchMovies() {
  // States: input query and movie search

  const [query, setQuery] = useQuery('');

  const searchMovies = async (e) => {
    e.preventDefault();

    const [movies, setMovies] = useState([]);

    const query = 'Jurassic Park';

    const url =
      'https://api.themoviedb.org/3/movie/550?api_key=c422e2bbed9ed9d724c2a7899bdf350d&language=en-US&query=${query}&page=1&include_adult=true';

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };
}

return (
  <>
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
    <div className="card-list">
      {movies
        .filter((movie) => movie.poster_path)
        .map((movie) => (
          <div className="card" key={movie.id}>
            <img
              className="card--image"
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
              alt={movie.title + ' poster'}
            />
            <div className="card--content">
              <h3 className="card--title">{movie.title}</h3>
              <p>
                <small>RELEASE DATE: {movie.release_date}</small>
              </p>
              <p>
                <small>RATING: {movie.vote_average}</small>
              </p>
              <p className="card--desc">{movie.overview}</p>
            </div>
          </div>
        ))}
    </div>
  </>
);
