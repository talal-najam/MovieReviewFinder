import React, { Component } from 'react'
import genreList from './genres.json'
import uuidv1 from 'uuid/v1'

class MovieCard extends Component {
    state = {}

    getMovieGenres = (searchGenreList, allGenreList) => {
        const results = [];
        for (let i = 0; i < searchGenreList.length; i++) {
            for (let j = 0; j < allGenreList.length; j++) {
                if (searchGenreList[i] === allGenreList[j].id) {
                    results.push(allGenreList[j].name)
                    continue;
                }
            }
        }
        return results;
    }

    render() {
        const { movie, url } = this.props

        const genres = this.getMovieGenres(movie.genre_ids, genreList.genres)

        const genreContent = genres.map(genre => <li className="list-group-item" key={uuidv1()}>{genre}</li>)

        const someKey = uuidv1();
        const someOtherKey = uuidv1();

        const t1 = `#collapseOne${someKey}`
        const id1 = `collapseOne${someKey}`
        const h1 = `headingOne${someKey}`

        const t2 = `#collapseTwo${someOtherKey}1`
        const id2 = `collapseTwo${someOtherKey}1`
        const h2 = `headingTwo${someOtherKey}1`

        return (
            <div className="card mx-3 mb-3 pb-0 outer" style={{ width: '30%' }}>
                <img className="card-img-top" src={url + movie.poster_path} alt="" />
                <div className="card-body">

                    <h5 className="text-center">{movie.title} </h5>

                    <div id="accordion">

                        {/* Overview */}
                        <div className="card ">
                            <div className="card-header m-0 p-0 " id={h1}>
                                <button
                                    className="btn btn-outline-primary collapsed "
                                    data-toggle="collapse"
                                    data-target={t1}
                                    aria-expanded="true"
                                    aria-controls={id1}
                                >
                                    Overview
                                </button>
                            </div>

                            <div id={id1} className="collapse" aria-labelledby={h1}
                                data-parent="#accordion">
                                <div className="card-body">
                                    {movie.overview}
                                </div>
                            </div>
                        </div>

                        {/* Genres */}
                        <div className="card ">
                            <div className="card-header m-0 p-0 " id={h2}>
                                <button
                                    className="btn btn-outline-primary collapsed"
                                    data-toggle="collapse"
                                    data-target={t2}
                                    aria-expanded="true"
                                    aria-controls={id2}

                                >
                                    Genres
                                </button>
                            </div>

                            <div id={id2} className="collapse" aria-labelledby={h2}
                                data-parent="#accordion">
                                <div className="card-body">
                                    <ul className="list-group">
                                        {genreContent}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button href="#" style={{ cursor: 'pointer' }} className="btn btn-primary mb-0 mt-2">Vote Average: {movie.vote_average}</button>
                    </div>
                    <div className="mt-2">
                        <h6><small>(Votes: {movie.vote_count})</small></h6>
                    </div>
                </div>
            </div>

        )
    }
}

export default MovieCard