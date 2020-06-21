import {FETCH_ACTOR_DETAILS, FETCH_ACTOR_POPULAR} from "../actionsType";

const initialState = {
    actor: {},
    popularMovies: [],
    loading: false,
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${FETCH_ACTOR_DETAILS}_PENDING`:
        case `${FETCH_ACTOR_POPULAR}_PENDING`: {
            return {
                ...state,
                loading: true
            };
        }

        case `${FETCH_ACTOR_DETAILS}_FULFILLED`: {
            return {
                ...state,
                actor: action.payload.data,
                loading: false
            };
        }

        case `${FETCH_ACTOR_POPULAR}_FULFILLED`: {
            return {
                ...state,
                popularMovies: action.payload.data.cast,
                loading: false
            };
        }

        default: {
            return state;
        }
    }
}