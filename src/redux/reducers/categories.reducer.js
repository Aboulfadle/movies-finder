import {FETCH_CATEGORY} from "../actionsType";

const initialState = {
    categories: [],
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${FETCH_CATEGORY}_PENDING`: {
            return {
                ...state,
            };
        }

        case `${FETCH_CATEGORY}_FULFILLED`: {
            return {
                ...state,
                categories: action.payload.data.genres
            };
        }

        default: {
            return state;
        }
    }
}