import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  render() {
    let allFilms = this.props.films.map((film, i) => {
      return <FilmRow film={film} key={`FilmRow-${i}`} />
    })

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <h1>{allFilms}</h1>
      </div>
    );
  }
}

export default FilmListing;