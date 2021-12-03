import './Main.css';
import React from 'react';
import { Movies } from '../../components/Movies/Movies';
import { Pages } from '../../components/Pages/Pages';
import { Preloader } from '../../components/Preloader/Preloader';
import { Search } from '../../components/Search/Search';

class Main extends React.Component {
  
  constructor (props) {
    super();
    this.state = {
      movies:[],
      url: 'http://www.omdbapi.com/?s=Dune&apikey=451e28ea',
      pages: 0,
      loading: true
    }
  }

  componentDidMount() {    
    fetch(this.state.url)
    .then(response => response.json())
    .then(data => {
      data.totalResults ? this.setState({pages: Math.ceil(data.totalResults / 10)}) : this.setState({pages: 0});
      this.setState({movies: data.Search, loading: false});
    });
  }

  pageChange = (ev) => {
    this.setState({loading: true});
    const page = this.state.url + `&page=${ev.target.getAttribute('page')}`;
    fetch(page)
    .then(response => response.json())
    .then(data => this.setState({movies: data.Search, loading: false}));
  }

  searchMovie = (str, type) => {
    this.setState({loading: true});
    let page = `http://www.omdbapi.com/?apikey=451e28ea&s=${str}`;
    if (type !== 'all') page = page + `&type=${type}`;
    this.setState({url: page});
    fetch(page)
    .then(response => response.json())
    .then(data => {
      data.totalResults ? this.setState({pages: Math.ceil(data.totalResults / 10)}) : this.setState({pages: 0});
      this.setState({movies: data.Search, loading: false});
    });
  }

  render () {
    const {movies, pages, loading} = this.state;
    return (
      <main className="content">
        <div className="container">        
          <Search searchMovie={this.searchMovie} />
          {!loading ? <Movies movies={movies} /> : <Preloader />}          
          {!loading && pages>1 ? <Pages pageChange = {this.pageChange} numbOfPages={pages} /> : <></>}
        </div>
      </main>
    )
  }
  
}

export {Main};