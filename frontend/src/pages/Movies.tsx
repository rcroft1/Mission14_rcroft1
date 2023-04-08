import { useState } from 'react';
import data from '../MovieData.json';
import { ListFormat } from 'typescript';

const MovieData = data.MovieData;

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(MovieData);

  return (
    // return the table
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          {/* iterates through all the movies to display them */}
          <tbody>
            {listOfMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
