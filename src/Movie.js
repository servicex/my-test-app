import React, { Component } from 'react';
import PropTypes from 'prop-types'
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';


class Movie extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        synopsis: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className='Movie'>
                <div className='Movie__Column'>
                    <MoviePoster poster={this.props.poster} title={this.props.title} />
                </div>
                <div className='Movie__Column'>
                    <h1>{this.props.title}</h1>
                    <div className='Movie__Genres'>
                        {this.props.genres.map(
                            (genre, index) => <MovieGenres genre={genre} key={index} />)}
                    </div>
                    <div className='Movie__Synopsis'>
                        {/*this.props.synopsis*/}
                        <LinesEllipsis
                            text={this.props.synopsis}
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                        />
                    </div>
                </div>
            </div>
        );
    };
}

class MoviePoster extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    };

    render() {
        return (
            <img className='Movie__Poster' alt='Can not load' title={this.props.title} src={this.props.poster}></img>
        );
    };
}

class MovieGenres extends Component {
    static propTypes = {
        genre: PropTypes.string.isRequired
    }
    render() {
        return (
            <span className='Movie__Genre'>{this.props.genre}</span>
        );
    };
}
export default Movie;
