import './Movies.css';
import { Movie } from "../Movie/Movie";

function Movies (props) {
  const {movies = []} = props;
  return (
    <div className="movies">
      {movies.length ? movies.map(item => <Movie 
        key={item.imdbID} 
        title={item.Title}
        img={item.Poster}
        type={item.Type}
        year={item.Year}
        id={item.imdbID}
      />) : <h3>Nothing found</h3>}
    </div>
  )
}

export {Movies};