import React, { useState } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  React.useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=563816be7094f72e00785214a59f00ae&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        // do something with the data here
        setMovies(data.results);
      });
  }, []);

  return (
    <table>
      <tr>
        <th>Title</th>
        <th>poster</th>
      </tr>
      {movies.map((movie) => (
        <tr>
          <td>{movie.title}</td>
          <td>
            <img alt={movie.title} src={movie.poster_path} />
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Movies;
