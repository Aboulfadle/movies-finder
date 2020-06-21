import {FETCH_MOVIES, FETCH_MOVIES_BY_CATEGORY, FETCH_MOVIES_BY_KEYWORD} from "../actionsType";
import _ from "lodash";

const initialState = {
    movies: [],
    totalPages: 1,
    totalResults: 0,
    categoryId: 0,
    pathParam: '',
    loading: false
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${FETCH_MOVIES}_PENDING`:
        case `${FETCH_MOVIES_BY_CATEGORY}_PENDING`:
        case `${FETCH_MOVIES_BY_KEYWORD}_PENDING`: {
            return {
                ...state,
                loading: true
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
                pathParam: action.payload.config.url,
                loading: false
            }
        }

        case `${FETCH_MOVIES_BY_CATEGORY}_FULFILLED`: {
            return {
                ...state,
                movies: action.payload.data.results,
                totalPages: action.payload.data.total_pages,
                totalResults: action.payload.data.total_results,
                categoryId: action.categoryId,
                loading: false
            };
        }

        case `${FETCH_MOVIES_BY_KEYWORD}_FULFILLED`: {
            return {
                ...state,
                movies: action.payload.data.results,
                totalPages: action.payload.data.total_pages,
                totalResults: action.payload.data.total_results,
                loading: false
            };
        }

        default: {
            return state;
        }
    }
}