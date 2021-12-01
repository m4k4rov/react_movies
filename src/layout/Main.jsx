import './Main.css';
import React from 'react';
import { Movies } from '../components/Movies';

class Main extends React.Component {
  
  constructor (props) {
    super();
    this.state = {
      movies:[]
    }
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?s=matrix&apikey=451e28ea')
    .then(response => response.json())
    .then(data => this.setState({movies: data.Search}))
  }

  render () {
    return (
      <main className="content">
        <div className="container">
          <Movies movies={this.state.movies} />
        </div>
      </main>
    )
  }
  
}

export {Main};