import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';

function MovieList2() {
  const [movieData2, setMovieData2] = useState<Movie[]>([]);

  // gets the movies from the api

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData2(temp);
    };

    fetchMovie();
  }, []);
  // this outputs the table of movies
  return (
    <>
      <br></br>
      <div className="row text-center">
        <h2>Movie List</h2>
      </div>
      <br></br>
      <div className="container">
        <table className="table table-bordered table-striped table-hover table-responsive">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Category</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {movieData2.map((m) => (
              <tr key={m.movieId}>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.category}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.edited}</td>
                <td>{m.lentTo}</td>
                <td>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList2;
