import React, { Component } from 'react'
import Spinner from './Spinner/Spinner'
import MovieCard from './MovieCard'

import { TMDbApiKey } from '../config/keys'
class InputForm extends Component {
    state = {
        title: '',
        rating: '',
        imdb_id: '',
        poster: '',
        results: [],
        loading: false,
        imgBaseURL: 'http://image.tmdb.org/t/p/w185/'
    }

    onSubmit = e => {
        // Prevent default form action
        e.preventDefault();

        // Not sure if this is the best place to set api keys but we'll roll with it for now
        const apiKey = TMDbApiKey;

        // Example: https://api.themoviedb.org/3/search/movie?api_key=9ea974456472389d0994c7fd70b47058&query=Bird%20Box
        this.setState({ loading: true })
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.state.title}`)
            .then(res => res.json())
            .then(data => this.setState({ results: data.results, loading: false }, this.setState({ title: '' })))
            .catch(err => console.log(err))
    }

    onChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { results, loading, imgBaseURL } = this.state;
        let resultContent;

        // Conditionally rendering results if there are any, otherwise displaying a loading spinner
        if (results !== undefined && results.length > 0) {
            const fewResults = results.slice(0, 3);
            resultContent = fewResults.map(movie => <MovieCard url={imgBaseURL} key={movie.id} movie={movie} />)
        } else if (results === undefined && !loading) {
            resultContent = (
                <div className="m-auto mt-5 pt-5">
                    <h1 className="pt-4">No Movies Found :(</h1>
                </div>
            )
        } else {
            resultContent = null
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 m-auto">
                        <form onSubmit={this.onSubmit} className="text-white mt-5">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.onChange}
                                    className="form-control form-control-lg"
                                    placeholder="Movie Title"
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-4 m-auto">
                                    <button
                                        type="button"
                                        onClick={this.onSubmit}
                                        style={{ width: '100%' }}
                                        className="btn btn-lg btn-info"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                        <br />
                        <hr />
                        {loading && <Spinner />}
                    </div>
                </div>
                <div className="row mt-3">
                    {resultContent}
                </div>
            </div>
        )
    }
}

export default InputForm;