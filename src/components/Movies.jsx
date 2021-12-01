import './Movies.css';
import { Movie } from "./Movie";

function Movies (props) {
  return (
    <div className="movies">
      {props.movies.map(item => <Movie 
        key={item.imdbID} 
        title={item.Title}
        img={item.Poster}
        type={item.Type}
        year={item.Year}
      />)}
    </div>
  )
}

export {Movies};