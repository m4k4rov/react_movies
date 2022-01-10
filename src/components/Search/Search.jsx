import React from "react";
import './Search.sass';

class Search extends React.Component {

  state = {
    search:'',
    type: 'all'
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
        this.props.searchMovie(this.state.search, this.state.type);

    }
  }

  handleFilter = (ev) => {
    this.setState({type: ev.target.value});
  }

  render() {
    return (
      <div className="search">
        <input
          placeholder="Search"
          className="search__input"
          type="text"
          value={this.state.search}
          onChange={(ev) => this.setState({search: ev.target.value})}
          onKeyDown={this.handleKey}
        />
        <button onClick={() => this.props.searchMovie(this.state.search, this.state.type)} className="search__button">Search</button>
        <div className="search__radioGroup">
          <label className="search__radioGroup-item">
            <input
              className="search__radio"
              type="radio"
              name="movie"
              value="all"
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span>all</span>
          </label>
          <label className="search__radioGroup-item">
            <input
              className="search__radio"
              type="radio"
              name="movie"
              value="movie"
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>movie</span>
          </label>
          <label className="search__radioGroup-item">
            <input
              className="search__radio"
              type="radio"
              name="movie"
              value="series"
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>series</span>
          </label>


        </div>
      </div>
    )
  }
}

export {Search};