import React {useState} from 'react';

export default function SearchMovies() {
  // States: input query and movie search

  const [query, setQuery] = useQuery('');

  const searchMovies = async (e) => {
    e.preventDefault();

    const query = 'Jurassic Park';

    const url =
      'https://api.themoviedb.org/3/movie/550?api_key=c422e2bbed9ed9d724c2a7899bdf350d&language=en-US&query=${query}&page=1&include_adult=true';

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
}

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
      value={query}
      onchange={(e) => setQuery(e.target.value)}
    />
    <button className="button" type="submit">
      Search
    </button>
  </form>
);
