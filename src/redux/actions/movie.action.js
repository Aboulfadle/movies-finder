import {FETCH_MOVIE_CASTS, FETCH_MOVIE_DETAILS} from "../actionsType";
import {client} from "../../client/client";

export function fetchMovieDetails(movieId) {
    return dispatch => {
        dispatch({
            type: FETCH_MOVIE_DETAILS,
            payload: client.get(`/movie/${movieId}`)
        });
    };
}

export function fetchMovieCasts(movieId) {
    return dispatch => {
        dispatch({
            type: FETCH_MOVIE_CASTS,
            payload: client.get(`/movie/${movieId}/credits`)
        });
    };
}