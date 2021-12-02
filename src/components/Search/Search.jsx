import React from "react";
import './Search.css';

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <input placeholder="Search" className="search__input" type="text" />
      </div>
    )
  }
}

export {Search};