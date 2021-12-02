import './Main.css';
import React from 'react';
import { Movies } from '../../components/Movies/Movies';
import { Pages } from '../../components/Pages/Pages';

class Main extends React.Component {
  
  constructor (props) {
    super();
    this.state = {
      movies:[],
      url: 'http://www.omdbapi.com/?s=bos&apikey=451e28ea',
      pages: 0
    }
  }

  componentDidMount() {
    fetch(this.state.url)
    .then(response => response.json())
    .then(data => {
      this.setState({pages: Math.ceil(data.totalResults / 10)})
      data.Search ? this.setState({movies: data.Search}) : this.setState({movies: []});
    });
  }

  pageChange = (ev) => {
    let page = this.state.url + `&page=${ev.target.getAttribute('page')}`;
    fetch(page)
    .then(response => response.json())
    .then(data => this.setState({movies: data.Search}));
  }

  render () {
    const {movies, pages} = this.state;
    return (
      <main className="content">
        <div className="container">
          {movies.length ? <Movies movies={movies} /> : <h1> Loading </h1>}          
          {movies.length ? <Pages pageChange = {this.pageChange} numbOfPages={pages} /> : <div></div>}
        </div>
      </main>
    )
  }
  
}

export {Main};