import {
    FETCH_MOVIE_CASTS,
    FETCH_MOVIE_DETAILS,
    FETCH_MOVIE_KEYWORDS,
    FETCH_MOVIE_RECOMMENDATIONS,
    FETCH_MOVIE_TRAILER
} from "../actionsType";
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

export function fetchMovieTrailer(movieId) {
    return dispatch => {
        dispatch({
            type: FETCH_MOVIE_TRAILER,
            payload: client.get(`/movie/${movieId}/videos`)
        });
    };
}

export function fetchMovieKeywords(movieId) {
    return dispatch => {
        dispatch({
            type: FETCH_MOVIE_KEYWORDS,
            payload: client.get(`/movie/${movieId}/keywords`)
        });
    };
}

export function fetchMovieRecommendations(movieId) {
    return dispatch => {
        dispatch({
            type: FETCH_MOVIE_RECOMMENDATIONS,
            payload: client.get(`/movie/${movieId}/recommendations`)
        });
    };
}