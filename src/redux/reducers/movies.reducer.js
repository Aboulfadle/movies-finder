import {FETCH_MOVIES, FETCH_MOVIES_BY_CATEGORY} from "../actionsType";
import _ from "lodash";

const initialState = {
    movies: [],
    totalPages: 1,
    totalResults: 0,
    categoryId: 0,
    pathParam: '',
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${FETCH_MOVIES}_PENDING`:
        case `${FETCH_MOVIES_BY_CATEGORY}_PENDING`: {
            return {
                ...state,
            };
        }

        case `${FETCH_MOVIES}_FULFILLED`: {
            if (state.pathParam !== action.payload.config.url) {
                state.movies = [];
            }
            return {
                ...state,
                totalPages: action.payload.data.total_pages,
                movies: _.unionBy(state.movies, action.payload.data.results, 'id'),
                totalResults: action.payload.data.total_results,
                pathParam: action.payload.config.url
            }
        }

        case `${FETCH_MOVIES_BY_CATEGORY}_FULFILLED`: {
            return {
                ...state,
                movies: action.payload.data.results,
                totalPages: action.payload.data.total_pages,
                totalResults: action.payload.data.total_results,
                categoryId: action.categoryId
            };
        }
        default: {
            return state;
        }
    }
}