import React from 'react';

const searchMovies = async (e) => {
  e.preventDefault();
  console.log('submitting');

  const query = 'Jurassic Park';

  const url =
    'https://api.themoviedb.org/3/movie/550?api_key=c422e2bbed9ed9d724c2a7899bdf350d&language=en-US&query=${query}&page=1&include_adult=true';

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export default function SearchMovies() {
  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="Enter movie"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
