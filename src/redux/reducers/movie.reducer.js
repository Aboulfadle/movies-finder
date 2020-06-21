import {
    FETCH_MOVIE_CASTS,
    FETCH_MOVIE_DETAILS,
    FETCH_MOVIE_KEYWORDS,
    FETCH_MOVIE_RECOMMENDATIONS,
    FETCH_MOVIE_TRAILER
} from "../actionsType";

const initialState = {
    movie: {},
    actors: [],
    trailer: {},
    loading: false,
    keywords: [],
    recommendations: [],
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${FETCH_MOVIE_DETAILS}_PENDING`:
        case `${FETCH_MOVIE_TRAILER}_PENDING`:
        case `${FETCH_MOVIE_KEYWORDS}_PENDING`:
        case `${FETCH_MOVIE_RECOMMENDATIONS}_PENDING`:
        case `${FETCH_MOVIE_CASTS}_PENDING`: {
            return {
                ...state,
                loading: true
            };
        }

        case `${FETCH_MOVIE_DETAILS}_FULFILLED`: {
            return {
                ...state,
                movie: action.payload.data,
                loading: false
            };
        }

        case `${FETCH_MOVIE_CASTS}_FULFILLED`: {
            return {
                ...state,
                actors: action.payload.data.cast,
                loading: false
            };
        }

        case `${FETCH_MOVIE_KEYWORDS}_FULFILLED`: {
            return {
                ...state,
                keywords: action.payload.data.keywords,
                loading: false
            };
        }

        case `${FETCH_MOVIE_RECOMMENDATIONS}_FULFILLED`: {
            return {
                ...state,
                recommendations: action.payload.data.results,
                loading: false
            };
        }

        case `${FETCH_MOVIE_TRAILER}_FULFILLED`: {
            let trailer = {};
            const trailers = action.payload.data.results.filter(video => video.site === "YouTube");
            if (trailers.length > 0) {
                trailer = trailers[0];
            }
            return {
                ...state,
                trailer: trailer,
                loading: false
            };
        }

        default: {
            return state;
        }
    }
}