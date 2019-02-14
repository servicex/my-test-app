import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {

  state = {
  };

  componentDidMount(){
    this._getMovieList();
  };

  _getMovieList = async () => {
    const Movies = await this._callApi();
    //console.log(Movies);
    this.setState(
      {
        Movies
      }
    );
    //console.log(this.state);
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
          .then(_response => _response.json())
          .then(_responseJson => _responseJson.data.movies)
          .catch(err => console.log(err));
  }

  _showMovieList = () => {
    const Movies = this.state.Movies.map(
      movie => <Movie 
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres}
      synopsis={movie.synopsis} />
    );
    return Movies;
  }

  render() {
    return (
      <div className={this.state.Movies ? 'App' : 'App--loading'}>
        {this.state.Movies ? this._showMovieList() : 'Loading.....'}
      </div>
      )
  };
}

export default App;
