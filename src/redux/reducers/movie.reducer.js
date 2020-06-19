import {FETCH_MOVIE_CASTS, FETCH_MOVIE_DETAILS} from "../actionsType";

const initialState = {
    movie: {},
    actors: [],
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${FETCH_MOVIE_DETAILS}_PENDING`:
        case `${FETCH_MOVIE_CASTS}_PENDING`: {
            return {
                ...state,
            };
        }

        case `${FETCH_MOVIE_DETAILS}_FULFILLED`: {
            return {
                ...state,
                movie: action.payload.data
            };
        }

        case `${FETCH_MOVIE_CASTS}_FULFILLED`: {
            return {
                ...state,
                actors: action.payload.data.cast
            };
        }

        default: {
            return state;
        }
    }
}